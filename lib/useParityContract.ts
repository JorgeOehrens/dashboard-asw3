import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { PARITY_ADRRESS, PARITY_ABI } from "@/utils/constants";


const fetchPARITYContract = (signerOrProvider: ethers.Signer | ethers.providers.Provider) =>
    new ethers.Contract(PARITY_ADRRESS, PARITY_ABI, signerOrProvider);

const connectingPARITYContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchPARITYContract(signer);
    return contract;
  } catch (error) {
    console.error('Error fetching token sale price:', error);
  }
};

export default connectingPARITYContract ;