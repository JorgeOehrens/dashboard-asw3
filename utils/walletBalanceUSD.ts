import walletBalanceETH from "./walletBalanceETH";
import connectingPARITYContract from "@/lib/useParityContract";
import { ethers } from "ethers";

const cache = {
    usdValue: 0,
    timestamp: 0
};

const isCacheValid = () => {
    const now = Date.now();
    const twoMinutes = 120 * 1000; 
    return (now - cache.timestamp) < twoMinutes;
};

const walletBalanceUSD = async () => {
    if (isCacheValid() && cache.usdValue !== null) {
        console.log('Returning cached value:', cache.usdValue);
        return cache.usdValue.toString(); 
    }

    const walletETHString = await walletBalanceETH();
    const walletETH = parseFloat(walletETHString);
    const PARITY_CONTRACT = await connectingPARITYContract();

    if (!PARITY_CONTRACT) {
        throw new Error("Error al conectar con el contrato de Parity");
    }

    const usd_eth = await PARITY_CONTRACT.getLatestPrice(); 
    const usdPerEth = ethers.utils.formatUnits(usd_eth, 8); 

    const amountUSD = parseFloat(usdPerEth) * walletETH;
    const amountUSDNoDecimals = Math.floor(amountUSD);

    cache.usdValue = amountUSDNoDecimals;
    cache.timestamp = Date.now();
    console.log('USD per ETH:', amountUSDNoDecimals);

    return amountUSDNoDecimals.toString();
};


export default walletBalanceUSD;