import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI } from "../utils/constants";

const fetchTokenSaleContract = (address: string, signerOrProvider: ethers.Signer | ethers.providers.Provider) =>
    new ethers.Contract(address, TOKEN_SALE_ABI, signerOrProvider);

const connectingTOKENSALEContract = async (address: string = TOKEN_SALE_ADDRESS): Promise<ethers.Contract | undefined> => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenSaleContract(address, signer);
    return contract;
  } catch (error) {
    console.error('Error fetching token sale contract:', error);
  }
};

export default connectingTOKENSALEContract;
