import { useMemo } from "react";
import Table from "../common/Table";
import doge from "/public/images/asset_digital.png";;
import MarketData from "../nftDetails/bidHistory";
import icon2 from "/public/images/icon/ethereum.png";



type PropsType = {
  balanceTRV: string;
  balanceWalletETH: string;
  balanceWalletUSD: string;

};
const WalletAssets = ({balanceTRV,balanceWalletETH, balanceWalletUSD  } : PropsType) => {
  
  const balanceWusd= balanceWalletUSD;
  const balancetoken= balanceTRV;

  
  const data = useMemo(
    () => [
      {
        asset: { coin: "Venture Capilta", coinSrt: "TRV", icon: doge },
        balance: { balence: balanceWusd, coinBalance: balancetoken  },
        price: 1900,
      },
      {
        asset: { coin: "Token X", coinSrt: "TOKX", icon: icon2 },
        balance: { balence: balanceWusd, coinBalance: balancetoken  },
        price: 500,
      },
    ],
    [balanceWusd, balancetoken] // Incluimos las dependencias aquí
  );
  

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
