import connectingTOKENSALEContract from "@/lib/useSaleContract";
import { ethers } from "ethers";

const PayAutomatic = async (address_sale: string) => {
    try {
        const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract(address_sale);
        if (!TOKEN_SALE_CONTRACT) {
            throw new Error("Error al conectar con el contrato de venta de tokens");
        }
        console.log("CONTRACT TOKEN SALE:: ", TOKEN_SALE_CONTRACT);
        let tokenSold = ethers.BigNumber.from(0);
        tokenSold = await TOKEN_SALE_CONTRACT.tokensSold();
        const tokenSoldEth = ethers.utils.formatEther(tokenSold);

        let tokenSupply = ethers.BigNumber.from(0);
        tokenSupply = await TOKEN_SALE_CONTRACT.maxSupply();
        const tokenSupplyEth = ethers.utils.formatEther(tokenSupply);

        const pay = await TOKEN_SALE_CONTRACT.someFunctionTriggeringDistribution();
        await pay.wait();
        console.log(pay);
        window.location.reload();
       

    } catch (error) {
        console.log(error);
    }
};

export default PayAutomatic;
