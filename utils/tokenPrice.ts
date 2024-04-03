import connectingTOKENSALEContract from "@/lib/useSaleContract";
import { ethers } from "ethers";

// Ahora tokenPriceEth acepta un argumento `address`
const tokenPriceEth = async (address: string): Promise<string> => {

    const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract(address);

    if (!TOKEN_SALE_CONTRACT) {
        throw new Error("Error al conectar con el contrato de venta de tokens");
    }

    const priceInWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();

    // La lógica restante permanece igual
    const priceInEth = ethers.utils.formatEther(priceInWei);
    const priceInEthString = priceInEth.toString();

    return priceInEthString;
};

export default tokenPriceEth;
