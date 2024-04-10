import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import eth from "/public/images/icon/ethereum.png";
import verify from "/public/images/icon/verify.png";
import tokenPriceEth from "@/utils/tokenPrice";
import ethPriceUsd from "@/utils/ethPriceUsd";

interface DocumentData {
  id: string;
  title: string;
  url: string;
}
type PropeType = {
  data: {
    id: number;
    img: StaticImageData;
    icon: StaticImageData;
    name: string;
    symbol: string;
    price: number;
    price_etc: number;
    maxSupply: number;
    adress_token: string;
    adress_parity: string;
    adress_sales: string;
    description: string;
    documData: DocumentData[];
  };
};

const NftCard = ({ data }: PropeType) => {
  const { id, price,price_etc, name, symbol,img, maxSupply ,icon,adress_token} = data;

  return (
    <div className="bg-white dark:bg-[var(--color-gray-6)] rounded-lg p-3">
      <div className="rounded-lg relative">
        <Link href={`/dashboard/token/${adress_token}`} passHref>
          <Image
            src={img}
            alt="nft_1"
            className="w-full rounded-lg hover:scale-95 transition-all duration-500 ease-out"
          />
        </Link>
        <div className="absolute right-5 -bottom-5 w-10 h-10 border-2 border-[var(--color-gray-5)] rounded-lg overflow-hidden">
          <Image src={icon} alt="user_1" className="flex-shrink-0" />
        </div>
 
        <div className="absolute bottom-20 left-3 flex items-center gap-2 p-1 bg-[#111315] bg-opacity-50 rounded-3xl">
          <span className="mr-1 text-white">${price} USD </span>

        </div>
        <div className="absolute bottom-10 left-3 flex items-center gap-2 p-1 bg-[#111315] bg-opacity-50 rounded-3xl">
          <Image src={eth} alt="eth" />
          <span className="mr-1 text-white">{price_etc} ETH </span>

        </div>
        
        
      </div>
      <div className="mt-7">
        <p className="flex items-center gap-3 text-base leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
          {symbol}
          <Image src={verify} alt="verify" />
        </p>
        <Link href={`/dashboard/token/${adress_token}`} passHref>
          <h6 className="font-bold text-[var(--color-gray-6)] dark:text-white mt-3">
            {name}
          </h6>
        </Link>
      </div>
      <div className="flex items-center justify-between mt-7">
 
        <Link
          href={`/dashboard/token/${adress_token}`} passHref
          className="px-3 py-2 text-center bg-[var(--color-primary)] text-[#F8FAFC] rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default NftCard;
