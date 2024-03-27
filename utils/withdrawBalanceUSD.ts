import walletBalanceETH from "./walletBalanceETH";
import connectingPARITYContract from "@/lib/useParityContract";
import { ethers } from "ethers";

const withdrawBalanceUSD = async () => {
    const walletETHString = await walletBalanceETH(); // Asegúrate de esperar a que se resuelva
    const walletETH = parseFloat(walletETHString); // Convertir a número

    const PARITY_CONTRACT = await connectingPARITYContract();
    if (!PARITY_CONTRACT) {
        throw new Error("Error al conectar con el contrato de Parity");
    }

    const usd_eth = await PARITY_CONTRACT.getLatestPrice(); // Espera a que getLatestPrice se resuelva
    const usdPerEth = ethers.utils.formatUnits(usd_eth, 8); // Ajusta según la precisión del contrato

    // Calcula el saldo total en USD
    const totalAmountUSD = parseFloat(usdPerEth) * walletETH;

    // Calcula el 0.7% del saldo en USD
    const withdrawAmountUSD = totalAmountUSD * 0.007; // 0.7% del total
    const withdrawAmountUSDNoDecimals = withdrawAmountUSD;

    console.log('USD per ETH:', usdPerEth);
    console.log('Withdraw amount in USD:', withdrawAmountUSDNoDecimals);

    // Aquí deberías continuar con la lógica para permitir al usuario retirar este monto.
    // Esto puede implicar interactuar con otro contrato, realizar una transferencia,
    // o cualquier otra acción específica según tu aplicación.

    return withdrawAmountUSDNoDecimals.toString();
};

export default withdrawBalanceUSD;
