import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Select from "../common/Select";
import btc from "/public/images/icon/btc.png";
import doge from "/public/images/icon/doge.png";
import ethereum from "/public/images/icon/ethereum.png";

const coins = [
  { id: 1, name: "TRV", icon: btc },];

const SwapMain = () => {
  const [swap, setSwap] = useState(false);

  const handleSwap = () => {
    setSwap(!swap);
  };

  return (
    <section className="w-full h-[77vh] sm:h-[100vh]">
      <div className="max-w-[504px] m-auto border dark:border-[#3C4145] py-5 px-4 sm:px-8 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between items-center gap-2 sm:gap-5 py-1 px-2 border border-[rgba(111,118, 126, 0.19)] dark:border-[#3C4145] rounded-lg">
          <Link
            href="/swap"
            className="text-center flex-1 text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2"
          >
            Buy
          </Link>
          <Link href="/liquidity" className="text-center flex-1">
            Withdraw
          </Link>
          
        </div>


        
         
      

        <hr className="my-3 dark:border-[#3C4145]" />

        <div className="cls">
          <h6 className="text-base font-semibold text-[var(--color-gray-5)] dark:text-white">
            Buy
          </h6>
          <div className="flex items-center justify-between border dark:border-[#3C4145] px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
            <div className="min-w-[113px] relative">
              {/* Select */}
              <Select data={coins} />
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

        

        <button className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2 mt-8">
          Connect Wallet
        </button>
      </div>
    </section>
  );
};

export default SwapMain;
