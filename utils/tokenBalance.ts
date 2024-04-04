import { ethers } from "ethers";
import ChechIfWalletConnected from "@/lib/walletConnected";
import connectingTOKENContract from "@/lib/useTokenContract";

const tokenBalance = async (address: string) => {
    const account = await ChechIfWalletConnected();
    const TOKEN_CONTRACT = await connectingTOKENContract(address);

    let tokenBalance;

    if (!TOKEN_CONTRACT) {
        throw new Error("Error al conectar con el contrato de tokens");
    }

    if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
    } else {
        tokenBalance = ethers.BigNumber.from(0);
    }

    const tokenInEth = ethers.utils.formatEther(tokenBalance).toString();


    return tokenInEth;
};

export default tokenBalance;