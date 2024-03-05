import AreaChart from "../charts/AreaChart";
import EarnBalance from "./EarnBalance";
import LiquidityPools from "./LiquidityPools";
import RecentTransactions from "./RecentTransactions";
import TotalBalance from "./TotalBalance";
import WalletAssets from "./WalletAssets";
import WalletBalance from "./WalletBalance";
import { useStateContext } from "@/context/index";
import useTokenBalance from "@/lib/readBalanceTokens";
import useTokenSelect from "@/lib/useToken";
import { useEffect, useState } from 'react';


const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const HomeMain = () => {
  const isClient = useIsClient();

  const { balance } = useTokenBalance();
  const  { token }  = useTokenSelect();
  return (
    <>
      <div className="w-full xl:w-8/12">
        <div className="bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col items-center justify-center gap-2 text-center relative -mb-14 z-10 pt-6">
            <p className="text-[24px] leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
              Wallet Balance
            </p>
            {isClient ? <h3 className="text-[32px] font-semibold leading-[120%] text-[var(--color-gray-7)] dark:text-white">{balance?.formatted}{token?.symbol} </h3> : <h3 className="text-[32px] font-semibold leading-[120%] text-[var(--color-gray-7)] dark:text-white">
              Loading...
</h3>}
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
          <AreaChart />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Wallet Balance Section */}
          <WalletBalance />

          {/* Earn Balance Section */}
          <EarnBalance />
        </div>

        {/* Wallet Assets Section */}
        <WalletAssets />
      </div>

      <div className="w-full xl:w-4/12">
        {/* Total Balance Section */}
        <TotalBalance />

        {/* Recent Transactions Section */}
        <RecentTransactions />

      </div>
    </>
  );
};

export default HomeMain;
