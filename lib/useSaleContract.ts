import { ethers } from "ethers";
import Web3Modal from "web3modal";
import {
    TOKEN_SALE_ADDRESS,
    TOKEN_SALE_ABI
  } from "../utils/constants";
// Define un provider. Por ejemplo, usando ethers con un provider de Infura.

const fetchTokenSaleContract = (signerOrProvider: ethers.Signer | ethers.providers.Provider) =>
    new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOrProvider);

const connectingTOKENSALEContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenSaleContract(signer);
    return contract;
  } catch (error) {
    console.error('Error fetching token sale price:', error);
  }
};

export default connectingTOKENSALEContract ;
