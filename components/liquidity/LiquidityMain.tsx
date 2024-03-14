import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Select from "../common/Select";
import btc from "/public/images/icon/btc.png";
import doge from "/public/images/icon/doge.png";
import ethereum from "/public/images/icon/ethereum.png";

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

const LiquidityMain = () => {
  const isClient = useIsClient();
  const [swap, setSwap] = useState(false);

  const handleSwap = () => {
    setSwap(!swap);
  };

  return (
    <section className="w-full h-auto sm:h-[100vh]">
      <div className="max-w-[504px] m-auto border dark:border-[#3C4145] py-5 px-4 sm:px-8 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
        <div className="flex justify-evenly items-center gap-2 sm:gap-5 py-1 px-2 border border-[rgba(111,118, 126, 0.19)] dark:border-[#3C4145] rounded-lg">
          <Link href="/swap" className="text-center flex-1 p-2">
            Buy
          </Link>
          <Link
            href="/liquidity"
            className="text-center flex-1 text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2"
          >
            Withdraw
          </Link>
          
        </div>


        


        <div className="cls">
          <h6 className="text-base font-semibold text-[var(--color-gray-5)] dark:text-white">
            Swap from
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
            Coin
          </h6>
          <div className="flex items-center justify-between border dark:border-[#3C4145] px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
            <div className="min-w-[113px]">
              {/* Select */}
              <Select data={coinsLiquidity} />
            </div>
            <div className="flex flex-1 flex-col items-end border-l dark:border-[#3C4145]">
              <input
                type={"text"}
                className="w-full text-lg leading-[150%] text-right outline-none bg-transparent text-[var(--color-gray-5)] dark:text-white placeholder:text-[var(--color-gray-5)] dark:placeholder:text-[var(--color-gray-3)]"
                placeholder="0.0"
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
              Base
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              BTC
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Pool liquidity (BTC)
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              4,685,918.19 BTC
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Pool liquidity (ETH)
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              58,982.95 ETH
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              LP supply
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              1,532,352.00 LP
            </span>
          </p>
        </div>
        { isClient ?        <button className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg p-2 mt-8">
          Witdrah
        </button> :          <button className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg p-2 mt-8">
          Conectando
        </button>}

      
      </div>
    </section>
  );
};

export default LiquidityMain;
