import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CollapseDetails from "../common/CollapseDetails";
import { Transaction } from "@/utils/types";
import btc from "/public/images/icon/ethereum.png";
import tenx from "/public/images/icon/tenx.png";
import aw3 from "/public/images/asset_digital_sm2.png";;


const TransactionItems = ({ transactions }: { transactions: Transaction[] }) => {
  const [collapsed, setCollapsed] = useState("");

  function toggleCollapse(value: any) {
    if (collapsed === value) {
      setCollapsed("");
    } else {
      setCollapsed(value);
    }
  }

  return (
    <>
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className={`${
            collapsed == `collapse-${index}` && "bg-[rgba(17,19,21,0.03)] py-6 px-3"
          } flex flex-col rounded-lg`}
        >
          <div
            className="w-full cursor-pointer"
            onClick={() => toggleCollapse(`collapse-${index}`)}
          >
          <div className="flex flex-col gap-2 md:gap-3">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-5 h-5 rounded-full bg-[var(--color-gray-4)] flex items-center justify-center">
                  <span className="material-symbols-outlined !text-white !text-xs">
                    swap_horiz
                  </span>
                </div>
                <h6 className="text-sm leading-[150%] font-bold dark:text-white">
                  MINT
                </h6>
              </div>
              <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                02/17/2023 4:27 PM
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="flex items-center">
                    <Image src={btc} alt="icon 1" className="flex-shrink-0" />
                    <Image
                      src={transaction.icon}
                      alt="icon 1"
                      className="-ml-3 flex-shrink-0"
                    />
                  </div>
                  <h6 className="text-base leading-[150%] font-semibold dark:text-white">
                  {transaction.tokens} {transaction.symbol}
                  </h6>
                </div>
                <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                  {transaction.token_price} ETH x 1 token
                </p>
              </div>

              <div className="cls">
                <span className="material-symbols-outlined text-sm leading-[150%] text-[var(--color-gray-4)]">
                  arrow_right_alt
                </span>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-1">
                  
                  <h6 className="text-base leading-[150%] font-semibold dark:text-white">
                  {transaction.amount} ETH 
                  </h6>
                  <Image src={btc} alt="icon 1" className="flex-shrink-0" />
                </div>
                <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                  ${transaction.eth_price_usd}
                </p>
              </div>
            </div>
          </div>
          </div>
          <motion.div
            className="overflow-hidden"
            animate={{ height: collapsed !== `collapse-${index}` ? 0 : "auto" }}
            transition={{ duration: 0.5 }}
          >
            {/* Collapse Details */}
            <CollapseDetails transaction={transaction} />
          </motion.div >
        </div>
      ))}
    </>
  );
};

export default TransactionItems;
