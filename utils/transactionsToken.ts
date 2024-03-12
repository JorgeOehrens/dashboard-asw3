import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";

const getAllTransactions = async () => {
    const account = await ChechIfWalletConnected();
    const TOKEN_CONTRACT = await connectingTOKENContract();

    if (!TOKEN_CONTRACT) {
        throw new Error("Error al conectar con el contrato de tokens");
    }

    let transactions;

    if (account) {
        transactions = await TOKEN_CONTRACT.getAllTransactions();
    } else {
        transactions = [];
    }

    return transactions;
};

export default getAllTransactions;
