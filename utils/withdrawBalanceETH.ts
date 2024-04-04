import connectingTOKENSALEContract from "@/lib/useSaleContract";
import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";
import MarketData from "@/components/nftDetails/bidHistory"; // Asume que esto contiene la información de los tokens
import { ethers } from "ethers";

const withdrawBalanceETH = async () => {
    const account = await ChechIfWalletConnected();

    if (!account) {
        console.log("No account connected.");
        return "0";
    }

    let totalWithdrawBalance = 0;

    for (const token of MarketData) {
        const TOKEN_CONTRACT = await connectingTOKENContract(token.adress_token);
        const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract(token.adress_sales);

        if (!TOKEN_CONTRACT || !TOKEN_SALE_CONTRACT) {
            console.log(`Error connecting to contract for ${token.symbol}`);
            continue; // Or handle the error as needed
        }

        let tokenBalance = ethers.BigNumber.from(0);

        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);

        const priceInWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();

        const priceInEth = ethers.utils.formatEther(priceInWei);
        const tokensInEth = ethers.utils.formatEther(tokenBalance);

        const balanceWallet = parseFloat(priceInEth) * parseFloat(tokensInEth);

        // Suponiendo que 0.007 es el porcentaje que quieres retirar
        const balanceWithdraw = balanceWallet * 0.007;

        totalWithdrawBalance += balanceWithdraw;
    }

    return totalWithdrawBalance.toString(); // Este es el total que quieres obtener
};

export default withdrawBalanceETH;
