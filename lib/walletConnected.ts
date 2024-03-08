// Define un provider. Por ejemplo, usando ethers con un provider de Infura.
import { ethers } from "ethers";


const ChechIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MateMask");
    
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
    
        const firstAccount = accounts[0];
        return firstAccount;
      } catch (error) {
        console.log(error);
      }
};

export default ChechIfWalletConnected ;
