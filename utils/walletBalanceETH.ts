import connectingTOKENSALEContract from "@/lib/useSaleContract";
import useTokenBalance from "@/lib/readBalanceTokens";
import { ethers } from "ethers";
import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";

const walletBalanceETH = async () => {
    const account = await ChechIfWalletConnected();
    const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract();
    const TOKEN_CONTRACT = await connectingTOKENContract();

    let tokenBalance;

    if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
    } else {
        tokenBalance = ethers.BigNumber.from(0);
    }
    const priceInWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();

    // Convertimos los valores BigNumber a strings para realizar operaciones aritméticas
    const priceInEth = ethers.utils.formatEther(priceInWei);
    const tokenInEth = ethers.utils.formatEther(tokenBalance);

    // Convertimos las cadenas a números para realizar la multiplicación
    const balanceWallet = parseFloat(priceInEth) * parseFloat(tokenInEth);

    // Convertimos el resultado numérico a cadena para la salida
    const balanceWalletString = balanceWallet.toString() ;


    return balanceWalletString;
};

export default walletBalanceETH;
