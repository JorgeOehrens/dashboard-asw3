import { useEffect, useMemo, useState } from "react";
import Table from "../common/Table";
import doge from "/public/images/asset_digital.png";
import MarketData from "../nftDetails/bidHistory";
import tokenBalance from "@/utils/tokenBalance";
import tokenBalanceUSD from "@/utils/tokenBalanceUSD"; // Asegúrate de tener esta función implementada

type PropsType = {
  balanceTRV: string;
  balanceWalletETH: string;
  balanceWalletUSD: string;
};

const WalletAssets = () => {
  const [balances, setBalances] = useState<{ [key: string]: string }>({});
  const [balancesUSD, setBalancesUSD] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadBalances = async () => {
      const balancesTemp: { [key: string]: string } = {};
      const balancesUSDTemp: { [key: string]: string } = {};
      for (const item of MarketData) {
        const balance = await tokenBalance(item.adress_token);
        const balanceUSD = await tokenBalanceUSD(item.adress_token,item.adress_sales);
        balancesTemp[item.symbol] = balance;
        balancesUSDTemp[item.symbol] = balanceUSD;
      }
      setBalances(balancesTemp);
      setBalancesUSD(balancesUSDTemp);
    };

    loadBalances();
  }, []);

  const data = useMemo(() => MarketData.map(item => ({
    asset: {
      coin: item.name,
      coinSrt: item.symbol,
      icon: item.icon, 
    },
    balance: {
      balence: balancesUSD[item.symbol] || 'Loading...', 
      coinBalance: balances[item.symbol] || 'Loading...', 
    },
    price: item.price,
  })), [balances, balancesUSD]);

  const columns = useMemo(
    () => [
      {
        Header: "Asset",
        accessor: "asset",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
      {
        Header: "Price",
        accessor: "price",
      }
    ],
    []
  );

  return (
    <div className="overflow-y-auto p-6 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.2)] mt-6">
      <h5 className="text-[20px] leading-[130%] text-[var(--color-gray-5)] dark:text-white pb-8 font-semibold">
        Wallet Assets
      </h5>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default WalletAssets;
