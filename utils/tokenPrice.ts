import connectingTOKENSALEContract from "@/lib/useSaleContract";
import { ethers } from "ethers";

const tokenPriceEth = async () => {
    const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract();



    if (!TOKEN_SALE_CONTRACT) {
        throw new Error("Error al conectar con el contrato de venta de tokens");
    }

    const priceInWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();

    // Convertimos los valores BigNumber a strings para realizar operaciones aritméticas
    const priceInEth = ethers.utils.formatEther(priceInWei);

    // Convertimos las cadenas a números para realizar la multiplicación

    // Convertimos el resultado numérico a cadena para la salida
    const priceInEthString = priceInEth.toString();

    return priceInEthString;
};

export default tokenPriceEth;
