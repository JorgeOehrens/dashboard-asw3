import { ethers } from "ethers";
import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";
import connectingPARITYContract from "@/lib/useParityContract";
import connectingTOKENSALEContract from "@/lib/useSaleContract";
const tokenBalanceUSD = async (address: string,address_sales: string) => {
    const account = await ChechIfWalletConnected();
    const TOKEN_CONTRACT = await connectingTOKENContract(address);
    const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract(address_sales);
    const PARITY_CONTRACT = await connectingPARITYContract();




    if (!TOKEN_CONTRACT) {
        throw new Error("Error al conectar con el contrato de tokens");
    }

    if (!PARITY_CONTRACT) {
        throw new Error("Error al conectar con el contrato de Parity");
    }
    if (!TOKEN_SALE_CONTRACT) {
        throw new Error("Error al conectar con el contrato de venta de tokens");
    }

    let tokenBalance = ethers.BigNumber.from(0);

    if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
        
    } else {
        tokenBalance = ethers.BigNumber.from(0);
    }
    const usd_eth = await PARITY_CONTRACT.getLatestPrice(); 
    const usdPerEth = ethers.utils.formatUnits(usd_eth, 8); 

    const priceInWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();
    const priceInEth = ethers.utils.formatEther(priceInWei);
    const tokenInEth = ethers.utils.formatEther(tokenBalance);
    const balanceWallet = parseFloat(priceInEth) * parseFloat(tokenInEth);
    const amountUSD = parseFloat(usdPerEth) * balanceWallet;
    const amountUSDNoDecimals = Math.floor(amountUSD);

    return amountUSDNoDecimals.toString();
};

export default tokenBalanceUSD;