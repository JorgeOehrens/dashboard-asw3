import walletBalanceETH from "./walletBalanceETH";
import connectingPARITYContract from "@/lib/useParityContract";
import { ethers } from "ethers";
import MarketData from "@/components/nftDetails/bidHistory";
import tokenBalanceUSD from "@/utils/tokenBalanceUSD";



const walletBalanceUSD = async () => {
    let totalBalanceUSD = 0;

    for (const item of MarketData) {
        const balanceUSD = await tokenBalanceUSD(item.adress_token, item.adress_sales);
        totalBalanceUSD += parseFloat(balanceUSD);
    }

    console.log('Total wallet balance in USD:', totalBalanceUSD);
    return totalBalanceUSD.toString();
};


export default walletBalanceUSD;