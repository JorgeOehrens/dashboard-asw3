import Descriptions from "@/components/nftDetails/Descriptions";
import MoreCollection from "@/components/nftDetails/MoreCollection";
import NftDetailsCard from "@/components/nftDetails/NftDetailsCard";
import RecentTransactions from "@/components/home/RecentTransactions";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NftDetails() {
    const router = useRouter();
    const { id } = router.query
    const tokenAddress = typeof id === 'string' ? id : Array.isArray(id) ? id[0] : '';


  return (
    <div className="w-full">
        {tokenAddress && <NftDetailsCard tokenAddress={tokenAddress} />}


      <div className="flex flex-col lg:flex-row gap-6 mt-[46px]">
        <div className="w-full lg:w-1/2">
          <Descriptions />
        </div>
        <div className="w-full lg:w-1/2">
          <RecentTransactions />
        </div>
      </div>
      <MoreCollection />
    </div>
  );
}
