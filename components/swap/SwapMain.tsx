import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Select from "../common/Select";
import btc from "/public/images/asset_digital.png";
import doge from "/public/images/icon/doge.png";
import ethereum from "/public/images/icon/ethereum.png";
import BuyToken from "@/utils/buyToken";
import tokenPriceEth from "@/utils/tokenPrice";
import ethPriceUsd from "@/utils/ethPriceUsd";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
const coins = [
  { id: 1, name: "TRV", icon: btc },];

const SwapMain = () => {
  const [swap, setSwap] = useState(false);
  const isClient = useIsClient();

  const handleSwap = () => {
    setSwap(!swap);
  };

  const [tokenPrice, settokenPrice] = useState(''); // Estado para almacenar el balance en USD
  const [ethPrice, setethPrice] = useState(''); // Estado para almacenar el balance en USD
  const [ethToPay, setEthToPay] = useState('0'); // Nuevo estado para almacenar ETH a pagar

  useEffect(() => {
    const fetchBalances = async () => {
      if (isClient) { // Solo intentamos cargar los balances si estamos en el lado del cliente


        
        const ethPrice1 = await ethPriceUsd();
        setethPrice(ethPrice1);

        const tokenBalance1 = await tokenPriceEth();
        settokenPrice(tokenBalance1);
        
      }
    };

    fetchBalances();
  }, [isClient]); 

  const [nToken, setNToken] = useState(""); // Estado para manejar la entrada de número de tokens
  
  const handleBuyToken = async () => {
    if(isClient) { // Si el cliente está conectado, intenta comprar tokens
      await BuyToken(nToken); // Llama a tu función BuyToken con el número de tokens
    } else {
      console.log("---");
    }
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
            value={nToken}
            onChange={(e) => setNToken(e.target.value)} // Actualiza el estado con el valor del input
          />
              <span className="price_in_usd text-base leading-[150%] text-right outline-none text-[var(--color-gray-4)]">
                $0.0
              </span>
            </div>
          </div>


        </div>
        <div className="flex flex-col gap-3 mt-3">
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Price
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
            {tokenPrice} ETH
            </span>
          </p>
           <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Eth to payy 
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              4,685,918.19 {ethPrice} ETH
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              USD conversion
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              $7,385.91 USD
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Earn balance one year
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              $700 USD
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              ETH Price
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              $ {ethPrice} USD
            </span>
          </p>
          {/*
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
          </p> */}
        </div>

        
        {isClient ? 
        <button onClick={handleBuyToken} className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2 mt-8">
                 Buy
        </button>     :         <button className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2 mt-8">
          Connect Wallet
        </button>}

      </div>
    </section>
  );
};

export default SwapMain;
