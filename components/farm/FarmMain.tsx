import { useEffect, useState } from 'react';
import WalletAssets from "@/components/home/WalletAssets";

const FarmMain = () => {



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
        <WalletAssets 
     
        />
      </div>
    </div>
  );
};

export default FarmMain;
