import { ethers } from 'ethers';
import {
    TOKEN_ADDRESS,
    TOKEN_ABI
  } from "../utils/constants";
// Asumiendo que tienes los tipos para la dirección del contrato y el ABI


const createEthereumContract = (address: string): ethers.Contract => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(address, TOKEN_ABI, signer);
    return transactionContract;
};

export default  createEthereumContract;
