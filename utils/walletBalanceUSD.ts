import walletBalanceETH from "./walletBalanceETH";
import connectingPARITYContract from "@/lib/useParityContract";
import { ethers } from "ethers";

const walletBalanceUSD = async () => {
    const walletETHString = await walletBalanceETH(); // Asegúrate de esperar a que se resuelva
    const walletETH = parseFloat(walletETHString); // Convertir a número

    const PARITY_CONTRACT = await connectingPARITYContract();

    if (!PARITY_CONTRACT) {
        throw new Error("Error al conectar con el contrato de Parity");
    }

    const usd_eth = await PARITY_CONTRACT.getLatestPrice(); // Espera a que getLatestPrice se resuelva
    const usdPerEth = ethers.utils.formatUnits(usd_eth, 8); // Ajusta según la precisión del contrato

    // Realiza la operación aritmética después de convertir walletETH a un número
    const amountUSD = parseFloat(usdPerEth) * walletETH;

    // Usar Math.floor para redondear hacia abajo y eliminar decimales, luego convertir a string si es necesario
    const amountUSDNoDecimals = Math.floor(amountUSD);

    console.log('USD per ETH:', amountUSDNoDecimals);

    return amountUSDNoDecimals.toString();
};

export default walletBalanceUSD;
 