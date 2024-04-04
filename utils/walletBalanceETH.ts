import connectingTOKENSALEContract from "@/lib/useSaleContract";
import useTokenBalance from "@/lib/readBalanceTokens";
import { ethers } from "ethers";
import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";

// Objeto para almacenar los valores en caché
const walletBalanceCache = {
    balance: "0",
    timestamp: 0
};

// Función para verificar si el caché es válido
const isWalletBalanceCacheValid = () => {
    const now = Date.now();
    const twoMinutes = 120 * 1000; // 2 minutos en milisegundos
    return (now - walletBalanceCache.timestamp) < twoMinutes;
};

const walletBalanceETH = async () => {
    if (isWalletBalanceCacheValid() && walletBalanceCache.balance !== null) {
        console.log('Returning cached balance:', walletBalanceCache.balance);
        return walletBalanceCache.balance.toString();
    }

    const account = await ChechIfWalletConnected();
    const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract();
    const TOKEN_CONTRACT = await connectingTOKENContract();

    if (!TOKEN_CONTRACT) {
        throw new Error("Error al conectar con el contrato de tokens");
    }

    if (!TOKEN_SALE_CONTRACT) {
        throw new Error("Error al conectar con el contrato de venta de tokens");
    }

    let tokenBalance = ethers.BigNumber.from(0);

    if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
    }

    const priceInWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();

    // Convertimos los valores BigNumber a strings para realizar operaciones aritméticas
    const priceInEth = ethers.utils.formatEther(priceInWei);
    const tokenInEth = ethers.utils.formatEther(tokenBalance);

    // Convertimos las cadenas a números para realizar la multiplicación
    const balanceWallet = parseFloat(priceInEth) * parseFloat(tokenInEth);

    // Actualizar caché con el nuevo valor y la nueva marca de tiempo
    walletBalanceCache.balance = balanceWallet.toString();
    walletBalanceCache.timestamp = Date.now();

    return walletBalanceCache.balance;
};

export default walletBalanceETH;
