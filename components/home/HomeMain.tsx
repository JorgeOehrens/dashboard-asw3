import EarnBalance from "./EarnBalance";
import LiquidityPools from "./LiquidityPools";
import RecentTransactions from "./RecentTransactions";
import TotalBalance from "./TotalBalance";
import WalletAssets from "./WalletAssets";
import WalletBalance from "./WalletBalance";
import useTokenBalance from "@/lib/readBalanceTokens";
import useTokenSelect from "@/lib/useToken";
import { Suspense, useEffect, useState } from 'react';
import walletBalanceETH from "@/utils/walletBalanceETH";
import walletBalanceusd from "@/utils/walletBalanceUSD";
import { useAccount } from 'wagmi';
import tokenBalance from "@/utils/tokenBalance";
import getAllTransactions from "@/utils/transactionsToken";
import withdrawBalanceUSD from "@/utils/withdrawBalanceUSD";

import withdrawBalanceETH from "@/utils/withdrawBalanceETH";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const HomeMain = () => {

  const [transactions, setTransactions] = useState<any[]>([]);

  const isClient = useIsClient();

  const [tokenBalance2, settokenBalance] = useState('0'); // Estado para almacenar el balance en USD


  const [walletBalanceUSD, setWalletBalanceUSD] = useState('0'); // Estado para almacenar el balance en USD

  const [balanceWalletETH, setBalanceWalletETH] = useState('0');


  const [withdrawBalanceUSD1, setWithdrawBalanceUSD] = useState('0'); // Estado para almacenar el balance en USD

  const [withdrawWalletETH, setWithdrawWalletETH] = useState('0');

  useEffect(() => {
    const fetchBalances = async () => {
      if (isClient) { // Solo intentamos cargar los balances si estamos en el lado del cliente
        const ethBalance = await walletBalanceETH();
        setBalanceWalletETH(ethBalance);

        const transactionsData = await getAllTransactions();
        setTransactions(transactionsData);

        

        const tokenBalance1 = await tokenBalance();
        settokenBalance(tokenBalance1);
        
        const usdBalance = await walletBalanceusd(); // Asumiendo que esta función devuelve el balance en USD
        setWalletBalanceUSD(usdBalance); // Actualiza el estado con el balance en USD

 
        const usdWithdraw = await withdrawBalanceUSD();
        setWithdrawBalanceUSD(usdWithdraw);

         
        const ethWithdraw = await withdrawBalanceETH();
        setWithdrawWalletETH(ethWithdraw);


      }
    };

    fetchBalances();
  }, [isClient]); // Este efecto depende de isClient para asegurarse de ejecutar en el lado del cliente

  return (
    <>
      <div className="w-full xl:w-8/12">
      <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Wallet Balance Section */}
          <Suspense>
          <WalletBalance 
          balanceWalletETH={balanceWalletETH}
          balanceWalletUSD={walletBalanceUSD}

           />
           </Suspense>

          {/* Earn Balance Section */}
          <EarnBalance          balanceWalletETH={withdrawWalletETH}
                 balanceWalletUSD={withdrawBalanceUSD1}
       
          />
        </div>
        <div className="bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.2)]">
          
          <div className="flex flex-col items-center justify-center gap-2 text-center relative -mb-14 z-10 pt-6">
            <p className="text-[24px] leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
              Wallet Balance
            </p>
            {isClient ? <h3 className="text-[32px] font-semibold leading-[120%] text-[var(--color-gray-7)] dark:text-white">$ {walletBalanceUSD} </h3> : <h3 className="text-[32px] font-semibold leading-[120%] text-[var(--color-gray-7)] dark:text-white">
              Loading...</h3>}
            <h3 className="text-[32px] font-semibold leading-[120%] text-[var(--color-gray-7)] dark:text-white">

            </h3>
            <p className="flex items-center text-[var(--color-primary-2)] dark:!text-[var(--color-primary-dark)] font-bold gap-1">
              <span className="material-symbols-outlined !text-base !text-[var(--color-primary-2)] dark:!text-[var(--color-primary-dark)]">
                chart_data
              </span>
              2.03%
            </p>
          </div>
          {/* Area Chart Section */}

          {/* <AreaChart transactions={transactions}/> */}
        </div>



        {/* Wallet Assets Section */}
        <WalletAssets 
        balanceTRV = {tokenBalance2}
        balanceWalletETH={balanceWalletETH}
        balanceWalletUSD={walletBalanceUSD}
        />
          <div className="w-full xl:w-8/12">
    {/* Otros componentes y secciones */}

    {/* Sección de Transacciones */}

  </div>
      </div>

      <div className="w-full xl:w-4/12">
        {/* Total Balance Section */}
        {/* <TotalBalance /> */}

        {/* Recent Transactions Section */}
        <RecentTransactions
        
        />
    <div>

    </div>
      </div>
    </>
  );
};

export default HomeMain;
