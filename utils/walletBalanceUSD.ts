import walletBalanceETH from "./walletBalanceETH";
import connectingPARITYContract from "@/lib/useParityContract";
import { ethers } from "ethers";

const walletBalanceUSD = async () => {
    const walletETH = await walletBalanceETH(); // Asegúrate de esperar a que se resuelva
    const PARITY_CONTRACT = await connectingPARITYContract();
    const usd_eth = await PARITY_CONTRACT.getLatestPrice(); // Espera a que getLatestPrice se resuelva
    const usdPerEth = ethers.utils.formatUnits(usd_eth,8); // Ajusta según la precisión del contrato
    const amountUSD = usdPerEth * walletETH

    console.log('USD per ETH:',amountUSD);

    return amountUSD.toString();
};

export default walletBalanceUSD;
