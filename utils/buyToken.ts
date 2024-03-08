import connectingTOKENSALEContract from "@/lib/useSaleContract";
import { ethers } from "ethers";


const BuyToken = async (nToken : string) =>{
    try {
        const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract();
  
        console.log("CONTRACT TOKEN SALE:: " ,TOKEN_SALE_CONTRACT )
        
        const pricePerTokenWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();
        // const pricePerTokenETH = ethers.utils.formatEther(pricePerTokenWei);
  
        const nTokenBigNumber = ethers.utils.parseUnits(nToken.toString(), 18); // Asume que nToken puede ser un decimal y lo convierte a la unidad más pequeña del token (wei)
        const pricePerTotal = pricePerTokenWei.mul(nTokenBigNumber).div(ethers.utils.parseUnits("1", 18)); // Ajusta por la conversión de unidades
    
  
        console.log(pricePerTotal.toString(), "Price per total in Wei");
  
  
        // const pricePerTokenETH2 = ethers.utils.parseUnits("0.004", "ether"); // 0.04 ETH por token
        // Calcula el costo total de los tokens
        const contract = await connectingTOKENSALEContract();
  
        const buying = await contract.buyTokens(nTokenBigNumber, {
          value: pricePerTotal
      
        });
        await buying.wait();
        console.log(buying);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
};

export default BuyToken;