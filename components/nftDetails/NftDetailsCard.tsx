import Image from "next/image";
import verify from "/public/images/icon/verify.png";
import nft_details from "/public/images/nft/logo.jpg";
import user_2 from "/public/images/user/logo2.jpg";


const NftDetailsCard = () => {

  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-5 2xl:gap-0 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.25)] p-2 lg:p-5">
      <div className="w-full xl:w-6/12 rounded-lg overflow-hidden">
        <Image src={nft_details} alt="nft_details" className="w-full" />
      </div>
      <div className="w-full xl:w-6/12 2xl:w-5/12">
        <h3 className="text-2xl sm:text-[32px] font-semibold leading-[120%] text-[var(--color-gray-7)] dark:text-white">
        Tanglewood Racquet Village Token
        </h3>

        <div className="flex flex-col min-[376px]:flex-row items-start min-[422px]:items-center gap-3 min-[422px]:gap-8 mt-3 sm:mt-6">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-12 sm:w-[60px] h-12 sm:h-[60px] rounded-full overflow-hidden">
              <Image src={user_2} alt="user_2" className="w-full" />
            </div>
            <div className="clss">
              <p className="text-[var(--color-gray-7)] dark:text-white">
              TRV
              </p>
              
            </div>
          </div>
          <div className="h-[43px] border border-[var(--color-gray-4)] hidden min-[376px]:block"></div>
          <div className="flex items-center gap-1 sm:gap-2">
     
            <div className="clss">
              <p className="text-[var(--color-gray-7)] dark:text-white">
                Guillaume Apithy
              </p>
              <p className="flex items-center gap-1 sm:gap-3 text-xs sm:text-base text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] mt-1">
                Travis Ragsdale
                <Image src={verify} alt="verify" />
              </p>
            </div>
          </div>
        </div>

     
        <div className="mt-[30px] sm:mt-10">
          <h6 className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] font-semibold text-base leading-[150%]">
            Current Bid
          </h6>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="mt-2">
              <h5 className="text-2xl leading-[130%] text-[var(--color-gray-7)] dark:text-white font-semibold">
                1.000 ETH
              </h5>
              <span className="text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] mt-1">
                (= $3,221.22)
              </span>
            </div>
            <div className="flex items-center gap-6">
              <button className="px-3 py-2 text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg">
                Buy tokens
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetailsCard;
