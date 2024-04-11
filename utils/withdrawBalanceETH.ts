import connectingTOKENSALEContract from "@/lib/useSaleContract";
import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";
import MarketData from "@/components/nftDetails/bidHistory"; // Asume que esto contiene la información de los tokens
import { ethers } from "ethers";
import getAllTransactionsPay from "./TransactionPay";
const withdrawBalanceETH = async () => {
    try {
        const transactions = await getAllTransactionsPay();

        const totalAmount = transactions.reduce((acc, transaction) => {
            // Suponiendo que transaction.amount ya está en la unidad correcta (ETH)
            return acc + parseFloat(transaction.amount);
        }, 0);

        return totalAmount.toString(); // Devuelve el total como string
    } catch (error) {
        console.error("Error al sumar las transacciones: ", error);
        return "0"; // Devuelve "0" o maneja el error como prefieras
    }
};

export default withdrawBalanceETH;
