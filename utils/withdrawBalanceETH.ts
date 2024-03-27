import connectingTOKENSALEContract from "@/lib/useSaleContract";
import useTokenBalance from "@/lib/readBalanceTokens";
import { ethers } from "ethers";
import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";

const withdrawBalanceETH = async () => {

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

    const priceInEth = ethers.utils.formatEther(priceInWei);
    const tokensInEth = ethers.utils.formatEther(tokenBalance);

    const balanceWallet = parseFloat(priceInEth) * parseFloat(tokensInEth);

    const balanceWithdraw = balanceWallet * 0.007;


    return balanceWithdraw.toString(); // Este es el valor que quieres obtener
};

export default withdrawBalanceETH;
