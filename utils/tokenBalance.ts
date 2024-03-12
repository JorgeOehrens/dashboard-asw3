import { ethers } from "ethers";
import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";

const tokenBalance = async () => {
    const account = await ChechIfWalletConnected();
    const TOKEN_CONTRACT = await connectingTOKENContract();

    let tokenBalance;

    if (!TOKEN_CONTRACT) {
        throw new Error("Error al conectar con el contrato de tokens");
    }

    if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
    } else {
        tokenBalance = ethers.BigNumber.from(0);
    }

    const tokenInEth = ethers.utils.formatEther(tokenBalance);


    return tokenInEth.toString();
};

export default tokenBalance;