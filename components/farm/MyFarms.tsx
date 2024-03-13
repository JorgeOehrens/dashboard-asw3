import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import myFarmTableData from "./farmData";
import MyFarmsCollapsContent from "./MyFarmsCollapsContent";
import { Transaction } from "@/utils/types";
import aw3 from "/public/images/asset_digital_sm2.png";;

const MyFarms = ({ transactions }: { transactions: Transaction[] }) => {
  const [collapsed, setCollapsed] = useState("");
  const [active, setActive] = useState("my_farms");

  function toggleCollapse(value: any) {
    if (collapsed === value) {
      setCollapsed("");
    } else {
      setCollapsed(value);
    }
  }
  return (
    <div className="w-[828px] xl:w-[1428px] bg-white dark:bg-[var(--color-gray-7)] py-8 px-6">
      <div className="flex items-center flex-wrap justify-between gap-3 sm:gap-5 border-b dark:border-[#6F767E] dark:border-opacity-40 pb-6 md:pb-8 mb-6 md:mb-8">
        <div className="inline-flex items-center border dark:border-[#6F767E] dark:border-opacity-40 rounded-lg p-1">
          <button
            type={"button"}
            className={`px-3 py-2 rounded-lg ${
              active === "my_farms" &&
              "bg-[var(--color-primary)] text-white dark:text-[var(--color-gray-3)]"
            } text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] whitespace-nowrap`}
            onClick={() => setActive("my_farms")}
          >
            My Transactions
          </button>
     
        </div>


      </div>

      <div className="flex items-center justify-between mb-5">
        {["Assets", "Tokens", "Action", "Contract", ""].map((itm, i, arr) => (
          <div
            key={i}
            className="flex items-center justify-start text-sm leading-[150%] text-black dark:text-white font-normal whitespace-nowrap gap-1"
          >
            {itm}
            {i !== arr.length - 1 ? (
              <span className="material-symbols-outlined !text-sm !text-[var(--color-gray-5)] dark:text-white">
                unfold_more
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      {transactions.map((itm, i) => {
        return (
          <div
            className={`bg-white dark:bg-[var(--color-gray-6)] shadow-[0px_1px_2px_rgba(0,0,0,0.2)] mt-4 rounded-lg px-5 ${
              collapsed == `collapse${i}`
                ? "py-6 border border-[var(--color-primary)]"
                : ""
            }`}
            key={i}
          >
            <div
              className={`flex justify-between gap-5 py-2 md:py-3 ${
                collapsed == `collapse${i}`
                  ? "shadow-[0px_1px_0px_rgba(0,0,0,0.2)] mb-3"
                  : ""
              }`}
              onClick={() => toggleCollapse(`collapse${i}`)}
            >
              <div className="min-w-[120px] whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="flex items-center flex-shrink-0">
                    <Image src={aw3} alt="icon" className="flex-shrink-0" />
                    <Image
                      src={aw3}
                      alt="icon"
                      className="flex-shrink-0 -ml-2"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
                    </p>
                    <p className="flex items-center gap-1 text-sm leading-[150%] text-[var(--color-primary)]">
                      Get LP
                      <span className="material-symbols-outlined !text-base !text-[var(--color-primary)] -rotate-[105deg]">
                        south_east
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="min-w-[120px] whitespace-nowrap">
                <p className="text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
                </p>
              </div>

              <div className="min-w-[120px] whitespace-nowrap text-sm leading-[150%]">
                <p className="text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
                  dUUIKK /day
                </p>
              </div>

              <div className="min-w-[120px] whitespace-nowrap text-sm leading-[150%]">
                <p className="text-sm leading-[150%] text-[var(--color-primary-2)] dark:text-[var(--color-gray-3)]">
                 %
                </p>
              </div>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default MyFarms;
