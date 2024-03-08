import Image from "next/image";
import eth from "@/public/images/icon/ethereum.png";

type PropsType = {
  title: string;
  balance: string;
  balance_usd: string;

  children: any;
};

const BalanceCard = ({ title, balance,balance_usd, children }: PropsType) => {
  return (
    <div className="bg-white dark:bg-[var(--color-gray-7)] rounded-lg px-6 py-5 shadow-[0px_1px_2px_rgba(0,0,0,0.2)]">
      <div className="flex items-center flex-wrap gap-4">
        {/* Radial Bar */}
        {children}

        <div className="cls">
          <p className="dark:text-[var(--color-gray-3)]">{title}</p>
          <h4 className="font-semibold text-2xl leading-[130%] dark:text-white mt-1">
            ${balance_usd}
            <br />
     

          </h4>
          <div className="flex items-center justify-center gap-1">
                  <div className="flex items-center">
                    <Image src={eth} alt="icon 1" className="flex-shrink-0" />
                    <Image
                      src={eth}
                      alt="icon 1"
                      className="-ml-4 flex-shrink-0"
                    />
                  </div>
                  <h6 className="text-base leading-[150%] font-semibold dark:text-white">
                  {balance} ETH
                  </h6>
                </div>

        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
