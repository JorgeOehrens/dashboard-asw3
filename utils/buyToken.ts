import connectingTOKENSALEContract from "@/lib/useSaleContract";
import { ethers } from "ethers";

const BuyToken = async (nToken: string) => {
    try {
        const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract();
        
        if (!TOKEN_SALE_CONTRACT) {
            throw new Error("Error al conectar con el contrato de venta de tokens");
        }

        console.log("CONTRACT TOKEN SALE:: ", TOKEN_SALE_CONTRACT);

        const pricePerTokenWei = await TOKEN_SALE_CONTRACT.getTokenSalePriceInWei();
        const nTokenBigNumber = ethers.utils.parseUnits(nToken.toString(), 18);
        const pricePerTotal = pricePerTokenWei.mul(nTokenBigNumber).div(ethers.utils.parseUnits("1", 18));

        console.log(pricePerTotal.toString(), "Price per total in Wei");

        const buying = await TOKEN_SALE_CONTRACT.buyTokens(nTokenBigNumber, {
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
