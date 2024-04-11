import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Select from "../common/Select";
import btc from "/public/images/icon/btc.png";
import doge from "/public/images/icon/doge.png";
import ethereum from "/public/images/icon/ethereum.png";
import walletBalanceETH from "@/utils/walletBalanceETH";
import walletBalanceusd from "@/utils/walletBalanceUSD";
import WalletBalance from "@/components/home/WalletBalance";
import EarnBalance from "@/components/home/EarnBalance";
import trv from "@/public/images/asset_digital_sm2.png";
import Withdraw from "@/utils/withdraw";
import withdrawBalanceUSD from "@/utils/withdrawBalanceUSD";
import MarketData from "../nftDetails/bidHistory";
import RecentTransactionsPay from "../home/RecentTransactionsPay";
import withdrawBalanceETH from "@/utils/withdrawBalanceETH";
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const coinsLiquidity = [
  { id: 2, name: "ETH", icon: ethereum },
];

const tokensLiquidity = [
  { id: 2, name: "TRV", icon: trv },
];

const LiquidityMain = () => {
  const isClient = useIsClient();
  const [swap, setSwap] = useState(false);
  const [walletBalanceUSD, setWalletBalanceUSD] = useState('0'); // Estado para almacenar el balance en USD
  const [nToken, setNToken] = useState(""); // Estado para manejar la entrada de número de tokens
  const [withdrawBalanceUSD1, setWithdrawBalanceUSD] = useState('0'); // Estado para almacenar el balance en USD
  const [selectedToken, setSelectedToken] = useState(MarketData[0]);

  const [withdrawWalletETH, setWithdrawWalletETH] = useState('0');
  const [balanceWalletETH, setBalanceWalletETH] = useState('0');
  const handleWithdraw = async () => {
    if(isClient) { // Si el cliente está conectado, intenta comprar tokens
      await Withdraw(nToken); // Llama a tu función BuyToken con el número de tokens
    } else {
      console.log("---");
    }
  };
  useEffect(() => {
    const fetchBalances = async () => {
      if (isClient) { // Solo intentamos cargar los balances si estamos en el lado del cliente


        

        const usdBalance = await walletBalanceusd(); // Asumiendo que esta función devuelve el balance en USD
        setWalletBalanceUSD(usdBalance); // Actualiza el estado con el balance en USD
        const ethBalance = await walletBalanceETH();
        setBalanceWalletETH(ethBalance);
        const usdWithdraw = await withdrawBalanceUSD();
        setWithdrawBalanceUSD(usdWithdraw);

         
        const ethWithdraw = await withdrawBalanceETH();
        setWithdrawWalletETH(ethWithdraw);
      }
    };

    fetchBalances();
  }, [isClient]); 
  const handleSwap = () => {
    setSwap(!swap);
  };
  const handleTokenChange =async (token: any) => {
    setSelectedToken(token);
    console.log(token);
    

  };
  return (
    <section className="w-full h-auto sm:h-[100vh]">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Wallet Balance Section */}
          <WalletBalance 
          balanceWalletETH={balanceWalletETH}
          balanceWalletUSD={walletBalanceUSD}

           />
       <EarnBalance
                    balanceWalletETH={withdrawWalletETH}
                    balanceWalletUSD={withdrawBalanceUSD1}
          />

        </div>
        <div className="w-full overflow-x-auto mt-6">
        <RecentTransactionsPay  />

        </div>
    
    </section>
  );
};

export default LiquidityMain;
