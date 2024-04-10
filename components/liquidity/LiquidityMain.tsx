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
      <div className="max-w-[504px] m-auto border dark:border-[#3C4145] py-5 px-4 sm:px-8 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
        <div className="flex justify-evenly items-center gap-2 sm:gap-5 py-1 px-2 border border-[rgba(111,118, 126, 0.19)] dark:border-[#3C4145] rounded-lg">
          <Link href="/dashboard/buy" className="text-center flex-1 p-2">
            Buy
          </Link>
          <Link
            href="/dashboard/withdraw"
            className="text-center flex-1 text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2"
          >
            Withdraw
          </Link>
          
        </div>


        

        
        <div className="cls mt-3">
   
          <div className="flex items-center justify-between border dark:border-[#3C4145] px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
            <div className="min-w-[113px] relative">
            TOKENS
            </div>
            <div className="flex flex-1 flex-col items-end border-l dark:border-[#3C4145]">
            <Select data={MarketData}  onChange={handleTokenChange}/>
            </div>
          </div>
        </div>
        <div className="cls mt-5">
          <h6 className="text-base font-semibold text-[var(--color-gray-5)] dark:text-white">
        Profit to Withdraw
          </h6>
          <div className="flex items-center justify-between border dark:border-[#3C4145] px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
            <div className="min-w-[113px] relative">
              MAX
            </div>
            <div className="flex flex-1 flex-col items-end border-l dark:border-[#3C4145]">
              <input
                type={"text"}
                className="w-full text-lg leading-[150%] text-right outline-none bg-transparent text-[var(--color-gray-5)] dark:text-white placeholder:text-[var(--color-gray-5)] dark:placeholder:text-[var(--color-gray-3)]"
                placeholder="0.0"
              />
              <span className="text-base leading-[150%] text-right outline-none text-[var(--color-gray-4)]">
                $200 MAX 
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h6 className="text-base font-semibold text-[var(--color-gray-5)] dark:text-white">
          To receive         </h6>
          <div className="flex items-center justify-between border dark:border-[#3C4145] px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
            <div className="min-w-[113px]">
              {/* Select */}
            </div>
            <div className="flex flex-1 flex-col items-end border-l dark:border-[#3C4145]">

              <input
                type={"text"}
                className="w-full text-lg leading-[150%] text-right outline-none bg-transparent text-[var(--color-gray-5)] dark:text-white placeholder:text-[var(--color-gray-5)] dark:placeholder:text-[var(--color-gray-3)]"
                placeholder="0.0"
                onChange={(e) => setNToken(e.target.value)} 
              />
              <span className="text-base leading-[150%] text-right outline-none text-[var(--color-gray-4)]">
                $0.0
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            ETH Price (USD)
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              BTC
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            Profit to Withdraw (USD)
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              $ 0 USD
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            Profit to Withdraw (ETH) 
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
            0.0 ETH
            </span>
          </p>
         
        </div>
        {isClient ? 
        <button onClick={handleWithdraw} className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2 mt-8">
                 Withdraw
        </button>     :         <button className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2 mt-8">
          Connect Wallet
        </button>}

      
      </div>
    </section>
  );
};

export default LiquidityMain;
