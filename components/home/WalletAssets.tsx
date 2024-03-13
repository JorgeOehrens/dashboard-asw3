import { useMemo } from "react";
import Table from "../common/Table";
import binance from "/public/images/icon/binance.png";
import btc from "/public/images/icon/btc.png";
import doge from "/public/images/asset_digital.png";;
import ethereum from "/public/images/icon/ethereum.png";
import litecoin from "/public/images/icon/litecoin.png";
import loopring from "/public/images/icon/loopring.png";
import monero from "/public/images/icon/monero.png";
import ripple from "/public/images/icon/ripple.png";
import tenx from "/public/images/icon/tenx.png";
import tether from "/public/images/icon/tether.png";


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
      }
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
