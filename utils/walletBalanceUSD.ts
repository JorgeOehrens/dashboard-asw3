import walletBalanceETH from "./walletBalanceETH";
import connectingPARITYContract from "@/lib/useParityContract";
import { ethers } from "ethers";

// Objeto para almacenar los valores en caché
const cache = {
    usdValue: 0,
    timestamp: 0
};

// Función para verificar si el caché es válido
const isCacheValid = () => {
    const now = Date.now();
    const twoMinutes = 120 * 1000; // 2 minutos en milisegundos
    return (now - cache.timestamp) < twoMinutes;
};

const walletBalanceUSD = async () => {
    if (isCacheValid() && cache.usdValue !== null) {
        console.log('Returning cached value:', cache.usdValue);
        return cache.usdValue.toString(); // Usa el valor en caché si es válido
    }

    const walletETHString = await walletBalanceETH(); // Asegúrate de esperar a que se resuelva
    const walletETH = parseFloat(walletETHString); // Convertir a número

    const PARITY_CONTRACT = await connectingPARITYContract();

    if (!PARITY_CONTRACT) {
        throw new Error("Error al conectar con el contrato de Parity");
    }

    const usd_eth = await PARITY_CONTRACT.getLatestPrice(); // Espera a que getLatestPrice se resuelva
    const usdPerEth = ethers.utils.formatUnits(usd_eth, 8); // Ajusta según la precisión del contrato

    const amountUSD = parseFloat(usdPerEth) * walletETH;
    const amountUSDNoDecimals = Math.floor(amountUSD);

    // Actualizar caché
    cache.usdValue = amountUSDNoDecimals;
    cache.timestamp = Date.now();

    console.log('USD per ETH:', amountUSDNoDecimals);

    return amountUSDNoDecimals.toString();
};


export default walletBalanceUSD;