import { ethers } from "ethers";
import  createEthereumContract  from "@/lib/useEthereumContract";
import Transaction from "@/types/Transaction"; // Asumiendo que tienes un tipo definido para las transacciones


const getAllTransactionsData = async (): Promise<Transaction[]> => {
    try {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const transactionContract = createEthereumContract();

            // Obtener la dirección del usuario actual
            const accounts = await provider.listAccounts();
            const currentAccount = accounts[0].toLowerCase();

            const availableTransactions = await transactionContract.getAllTransactions();

            const structuredTransactions: Transaction[] = availableTransactions.filter((transaction: any) => {
                // Verificar si la dirección del remitente o destinatario es igual a la dirección del usuario actual
                return transaction.from.toLowerCase() === currentAccount || transaction.to.toLowerCase() === currentAccount;
            }).map((transaction: any) => ({
                from: transaction.from,
                to: transaction.to,
                tokens: ethers.utils.formatUnits(transaction.tokens, 18), // Asume que 'tokens' usa 18 decimales. Ajusta según tu contrato.
                eth_price_usd: ethers.utils.formatUnits(transaction.eth_price_usd, 18), // Asume que 'eth_price_usd' se trata como un valor con decimales. Ajusta según tu contrato.
                token_price: ethers.utils.formatUnits(transaction.token_price, 18), // Ajusta según tu contrato
                amount: ethers.utils.formatEther(transaction.amount),
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            }));

            return structuredTransactions;
        } else {
            console.log("Ethereum is not present");
            return [];
        }
    } catch (error) {
        console.error("Error al obtener las transacciones: ", error);
        throw new Error("Error al obtener las transacciones");
    }
};

export default getAllTransactionsData;
