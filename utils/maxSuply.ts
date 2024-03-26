import connectingTOKENContract from "@/lib/useTokenContract";
import { ethers } from "ethers";
import checkIfWalletConnected from "@/lib/walletConnected"; // Asumo que esta función comprueba si la wallet está conectada

const supplyMax = async () => {
  const account = await checkIfWalletConnected();
  const TOKEN_CONTRACT = await connectingTOKENContract();

  if (!TOKEN_CONTRACT) {
      throw new Error("Error al conectar con el contrato de tokens");
  }

  let maxSupply = '0';

  if (account) {
      // Asegúrate de llamar a la función totalSupply() del contrato
      maxSupply = await TOKEN_CONTRACT.totalSupply();
      // Formatear el resultado de totalSupply a un string legible (Ether) si es necesario
      maxSupply = ethers.utils.formatEther(maxSupply);
  }

  return maxSupply;
};

export default supplyMax;
