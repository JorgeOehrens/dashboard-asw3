import connectingTOKENContract from "@/lib/useTokenContract";
import { ethers } from "ethers";
import checkIfWalletConnected from "@/lib/walletConnected"; // Asumo que esta función comprueba si la wallet está conectada

const supplyMax = async (address: string) => {
  const account = await checkIfWalletConnected();
  const TOKEN_CONTRACT = await connectingTOKENContract(address);

  if (!TOKEN_CONTRACT) {
      throw new Error("Error al conectar con el contrato de tokens");
  }

  let maxSupply = '0';

  if (account) {
      
      maxSupply = await TOKEN_CONTRACT.totalSupply();
      
      maxSupply = ethers.utils.formatEther(maxSupply);
  }

  return maxSupply;
};

export default supplyMax;
