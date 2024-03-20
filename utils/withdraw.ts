import connectingTOKENSALEContract from "@/lib/useSaleContract";
import { ethers } from "ethers";

const Withdraw = async (nToken: string) => {
    try {
        const TOKEN_SALE_CONTRACT = await connectingTOKENSALEContract();
        
        if (!TOKEN_SALE_CONTRACT) {
            throw new Error("Error al conectar con el contrato de venta de tokens");
        }

        const nTokenBigNumber = ethers.utils.parseUnits(nToken, 18);

        // Se especifica un límite de gas manual basado en una estimación adecuada para la función que se va a ejecutar.
        // NOTA: Debes reemplazar `100000` con una estimación más precisa basada en tus propias pruebas y el comportamiento esperado de tu contrato.
        
        const gasLimitEstimate = 100000;

        const transaction = await TOKEN_SALE_CONTRACT.withdrawEth(nTokenBigNumber, {
            gasLimit: gasLimitEstimate
        });

        await transaction.wait();
        console.log("Transacción exitosa:", transaction);
        window.location.reload();
    } catch (error) {
        console.error("Error durante el retiro:", error);
    }
};

export default Withdraw;
