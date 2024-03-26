import Descriptions from "@/components/nftDetails/Descriptions";
import TransactionItems from "@/components/nftDetails/Details";
import MoreCollection from "@/components/nftDetails/MoreCollection";
import NftDetailsCard from "@/components/nftDetails/NftDetailsCard";
import RecentTransactions from "@/components/home/RecentTransactions";
import useTokenSelect from "@/lib/useToken";

export default function NftDetails() {
  return (
    <div className="w-full">
      {/* Nft Details Card */}
      <NftDetailsCard />

      <div className="flex flex-col lg:flex-row gap-6 mt-[46px]">
        <div className="w-full lg:w-1/2">
          {/* Descriptions */}
          <Descriptions />
        </div>
        <div className="w-full lg:w-1/2">
          {/* Details  */}
          <RecentTransactions />
        </div>
      </div>
      {/* More Collection */}
      <MoreCollection />
    </div>
  );
}
