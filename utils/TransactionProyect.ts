import { ethers } from "ethers";
import createEthereumContract from "@/lib/useEthereumContract";
import MarketData from "@/components/nftDetails/bidHistory"; // Asegúrate de que esto contiene los datos de los tokens
import Transaction from "@/types/Transaction";

const getAllTransactionsToken = async (address: string): Promise<Transaction[]> => {
    try {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.listAccounts();
            const currentAccount = accounts[0].toLowerCase();

            let allStructuredTransactions: Transaction[] = [];

            for (const token of MarketData) {
                if (token.adress_token.toLowerCase() === address.toLowerCase()) {
                    const transactionContract = createEthereumContract(address);
                    const availableTransactions = await transactionContract.getAllTransactions();

                    const structuredTransactions: Transaction[] = availableTransactions.filter((transaction: any) => {
                        return transaction.from.toLowerCase() === currentAccount || transaction.to.toLowerCase() === currentAccount;
                    }).map((transaction: any) => ({
                        from: transaction.from,
                        to: transaction.to,
                        tokens: ethers.utils.formatUnits(transaction.tokens, 18), 
                        eth_price_usd: ethers.utils.formatUnits(transaction.eth_price_usd, 18), 
                        token_price: ethers.utils.formatUnits(transaction.token_price, 18), 
                        amount: ethers.utils.formatEther(transaction.amount),
                        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                        type: transaction.type_transaction,
                        icon: token.icon, 
                        symbol: token.symbol, 
                        name: token.name, 
                    }));

                    allStructuredTransactions = allStructuredTransactions.concat(structuredTransactions);
                }
            }

            return allStructuredTransactions;
        } else {
            console.log("Ethereum is not present");
            return [];
        }
    } catch (error) {
        console.error("Error al obtener las transacciones: ", error);
        throw new Error("Error al obtener las transacciones");
    }
};

export default getAllTransactionsToken;
