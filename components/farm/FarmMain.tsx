import { useEffect, useState } from 'react';
import WalletAssets from "@/components/home/WalletAssets";
import walletBalanceETH from "@/utils/walletBalanceETH";
import walletBalanceusd from "@/utils/walletBalanceUSD";
import tokenBalance from "@/utils/tokenBalance";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
const FarmMain = () => {
  const [tokenBalance2, settokenBalance] = useState(''); // Estado para almacenar el balance en USD


  const [walletBalanceUSD, setWalletBalanceUSD] = useState(''); // Estado para almacenar el balance en USD

  const [balanceWalletETH, setBalanceWalletETH] = useState('');

  const isClient = useIsClient();
  useEffect(() => {
    const fetchTransactions = async () => {
      if (isClient) {
        try {
          const ethBalance = await walletBalanceETH();
          setBalanceWalletETH(ethBalance);
        const tokenBalance1 = await tokenBalance();
        settokenBalance(tokenBalance1);
        
        const usdBalance = await walletBalanceusd(); // Asumiendo que esta función devuelve el balance en USD
        setWalletBalanceUSD(usdBalance); // Actualiza el estado con el balance en USD

  
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      }
    };

    fetchTransactions();
  }, [isClient]);
  return (
    <div className="w-full">
      <div className="clss">
        <h1 className="text-5xl leading-[120%] font-semibold text-[var(--color-gray-6)] dark:text-white">
          Portfolio
        </h1>
        <p className="text-[var(--color-gray-6)] dark:text-white mt-3">
        Here you can review the assets in your wallet
        </p>
      </div>
      <div className="w-full overflow-x-auto mt-6">
        {/* My Farms Table */}
        <WalletAssets 
        balanceTRV = {tokenBalance2}
        balanceWalletETH={balanceWalletETH}
        balanceWalletUSD={walletBalanceUSD}
        />
      </div>
    </div>
  );
};

export default FarmMain;
