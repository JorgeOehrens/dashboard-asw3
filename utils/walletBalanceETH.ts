import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";
import connectingTOKENSALEContract from "@/lib/useSaleContract";
import { ethers } from "ethers";
import MarketData from "@/components/nftDetails/bidHistory"; // Asegúrate de que esto contenga los datos necesarios

// Objeto para almacenar los valores en caché
const walletBalanceCache = {
    balanceETH: "0",
    timestamp: 0
};

// Función para verificar si el caché es válido
const isWalletBalanceCacheValid = () => {
    const now = Date.now();
    const twoMinutes = 120 * 1000; // 2 minutos en milisegundos
    return (now - walletBalanceCache.timestamp) < twoMinutes;
};

const walletBalanceETH = async () => {
    if (isWalletBalanceCacheValid() && walletBalanceCache.balanceETH !== null) {
        console.log('Returning cached balance:', walletBalanceCache.balanceETH);
        return walletBalanceCache.balanceETH.toString();
    }

    const account = await ChechIfWalletConnected();
    let totalBalanceETH = 0;

    for (const item of MarketData) {
        const TOKEN_CONTRACT = await connectingTOKENContract(item.adress_token);
        const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract(item.adress_sales);

        if (!TOKEN_CONTRACT || !TOKEN_SALE_CONTRACT) {
            continue; // O manejar el error según sea necesario
        }

        let tokenBalance = ethers.BigNumber.from(0);

        if (account) {
            tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
        }

        const priceInWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();
        const priceInEth = ethers.utils.formatEther(priceInWei);
        const tokenInEth = ethers.utils.formatEther(tokenBalance);

        totalBalanceETH += parseFloat(priceInEth) * parseFloat(tokenInEth);
    }

    // Actualizar caché con el nuevo valor y la nueva marca de tiempo
    walletBalanceCache.balanceETH = totalBalanceETH.toString();
    walletBalanceCache.timestamp = Date.now();

    console.log('Total wallet balance in ETH:', totalBalanceETH);
    return walletBalanceCache.balanceETH;
};

export default walletBalanceETH;
