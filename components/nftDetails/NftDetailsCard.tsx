import Image from "next/image";
import verify from "/public/images/icon/verify.png";
import nft_details from "/public/images/nft/logo.jpg";
import user_2 from "/public/images/user/logo2.jpg";
import BuyToken from "@/utils/buyToken";
import tokenPriceEth from "@/utils/tokenPrice";
import ethPriceUsd from "@/utils/ethPriceUsd";
import walletBalanceETH from "@/utils/walletBalanceETH";
import walletBalanceusd from "@/utils/walletBalanceUSD";
import { useState, useEffect } from "react";
import supplyMax from "@/utils/maxSuply";
import MarketData from "../nftDetails/bidHistory";
import { useRouter } from 'next/router';

type PropsType = {
  tokenAddress: string;

};
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const NftDetailsCard = ({tokenAddress}:PropsType) => {
  const [swap, setSwap] = useState(false);
  const isClient = useIsClient();
  console.log('TOKEN ADDRESS',tokenAddress);
  const indice_token = MarketData.findIndex(token => token.adress_token === tokenAddress);
  const img = MarketData[indice_token].img;
  const icon = MarketData[indice_token].icon;
  const name = MarketData[indice_token].name;
  const symbol = MarketData[indice_token].symbol;
  const addres_token = MarketData[indice_token].adress_token;
  const addres_sales = MarketData[indice_token].adress_sales;
  const max_supply_token = MarketData[indice_token].maxSupply;

  const handleSwap = () => {
    setSwap(!swap);
  };
  const [maxSupply, setMaxSupply] = useState('0');
  const [priceTokenUSD2, setPriceTokenUSD2] = useState('0');
  const [walletBalanceUSD, setWalletBalanceUSD] = useState('0'); 

  const [balanceWalletETH, setBalanceWalletETH] = useState('0');
  const [priceTokenUSD, setPriceTokenUSD] = useState('0');
  const [earnBalanceUSD, setEarnBalanceUSD] = useState('0');

  const [tokenPrice, settokenPrice] = useState('0'); 
  const [ethPrice, setethPrice] = useState('0'); 
  const [ethToPay, setEthToPay] = useState('0');
  const [usdConversion, setUsdConversion] = useState('0'); 
  const [earnBalance, setEarnBalance] = useState('0'); 
  useEffect(() => {
    const fetchBalances = async () => {
      if (isClient) { 


        
        const ethPrice1 = await ethPriceUsd();
        setethPrice(ethPrice1);

        const tokenBalance1 = await tokenPriceEth(MarketData[indice_token].adress_sales);
        settokenPrice(tokenBalance1);
        const usdBalance = await walletBalanceusd(); 
        setWalletBalanceUSD(usdBalance); 
        const ethBalance = await walletBalanceETH();
        setBalanceWalletETH(ethBalance);

        const suply = await supplyMax();
        setMaxSupply(suply);

        
      }
    };

    fetchBalances();
  }, [isClient]); 

  

  const [nToken, setNToken] = useState(""); // Estado para manejar la entrada de número de tokens
  useEffect(() => {
  const calculateEthToPay = () => {
    if ((tokenPrice) !="0"&& (nToken) !="0") { // Ensure both values are not NaN
      const ethToPayCalculated = Number(tokenPrice) * Number(nToken);
      setEthToPay(ethToPayCalculated.toFixed(2)); // Update ethToPay state
    }
  };

  calculateEthToPay();
}, [tokenPrice, nToken]);

useEffect(() => {
  const calculateUsdConversion = () => {
    const usdValue = Number(ethToPay) * Number(ethPrice);
    setUsdConversion(usdValue.toFixed(2)); // Update USD conversion state
    
  };

  calculateUsdConversion();
}, [ethToPay, ethPrice]);
useEffect(() => {
  const calculateEarnBalance = () => {
    const months = 36; // 3 años * 12 meses
    const monthlyInterest = 0.007; // 0.7% interés mensual
    if (ethToPay !== '0') {
      const earnBalanceCalculated = Number(ethToPay) * monthlyInterest * months;
      setEarnBalance(earnBalanceCalculated.toFixed(2)); // Actualiza el estado de "Earn balance"
      const earnBalanceCalculatedUSD = earnBalanceCalculated * Number(ethPrice);
      setEarnBalanceUSD(earnBalanceCalculatedUSD.toFixed(2)); // Actualiza el estado de "Earn balance" en USD


      
    }
  };

  calculateEarnBalance();
}, [ethToPay]);
  const handleBuyToken = async () => {
    if(isClient) { // Si el cliente está conectado, intenta comprar tokens
      await BuyToken(nToken,MarketData[0].adress_sales); // Llama a tu función BuyToken con el número de tokens
    } else {
      console.log("---");
    }
  };
  useEffect(() => {
    const calculatePriceTokenUSD = () => {
      const priceUSD = Number(tokenPrice) * Number(ethPrice);

      setPriceTokenUSD(priceUSD.toFixed(2));
      setPriceTokenUSD2(priceUSD.toFixed(2));

    };
  
    calculatePriceTokenUSD();
  }, [tokenPrice, ethPrice]);
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-5 2xl:gap-0 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.25)] p-2 lg:p-5">
      <div className="w-full xl:w-6/12 rounded-lg overflow-hidden">
      <h3 className="text-2xl sm:text-[25px] font-semibold leading-[120%] text-[var(--color-gray-7)] dark:text-white">
        Max Supply
        </h3>
        <p className="text-l sm:text-[18px] font-semibold leading-[120%] text-[var(--color-gray-4)] dark:text-white">
               {maxSupply} Tokens / {max_supply_token} tokens

              </p>
        <Image src={img} alt="nft_details" className="w-full" />
        <p className="flex items-center justify-between text-xl leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Price Token USD
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
            ${priceTokenUSD} USD 
            </span>
          </p>
        <p className="flex items-center justify-between text-xl leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Price Token ETH
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
            {tokenPrice} ETH
            </span>
          </p>
         
      </div>
      <div className="w-full xl:w-6/12 2xl:w-5/12">
        

     
        <div className="max-w-[504px] m-auto border dark:border-[#3C4145] py-5 px-4 sm:px-8 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
        <h3 className="text-2xl sm:text-[32px] font-semibold leading-[120%] text-[var(--color-gray-7)] dark:text-white">
        {name}
        </h3>

        <div className="flex flex-col min-[376px]:flex-row items-start min-[422px]:items-center gap-3 min-[422px]:gap-8 mt-3 sm:mt-6">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-12 sm:w-[60px] h-12 sm:h-[60px] rounded-full overflow-hidden">
              <Image src={icon} alt="user_2" className="w-full" />
            </div>
            <div className="clss">
              <p className="text-[var(--color-gray-7)] dark:text-white">
              {symbol}
              </p>
              
            </div>
          </div>
          <div className="h-[43px] border border-[var(--color-gray-4)] hidden min-[376px]:block"></div>
          <div className="flex items-center gap-1 sm:gap-2">
     
            <div className="clss">
             
              <p className="flex items-center gap-1 sm:gap-3 text-xs sm:text-base text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] mt-1">
                {name}
                <Image src={verify} alt="verify" />
              </p>
            </div>
          </div>
        </div>


        
         
      

        <hr className="my-3 dark:border-[#3C4145]" />

        <div className="cls">
      
          <div className="flex items-center justify-between border  px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
  
            <div className="flex flex-1 flex-col items-end border-l ">
            <input
            type={"text"}
            className="w-full text-lg leading-[150%] text-right outline-none bg-transparent text-[var(--color-gray-5)] dark:text-white placeholder:text-[var(--color-gray-5)] dark:placeholder:text-[var(--color-gray-3)]"
            placeholder="0.0"
            value={nToken}
            onChange={(e) => setNToken(e.target.value)} // Actualiza el estado con el valor del input
          />
              <span className="price_in_usd text-base leading-[150%] text-right outline-none text-[var(--color-gray-4)]">
                ${usdConversion}
              </span>
              <span className="price_in_usd text-base leading-[150%] text-right outline-none text-[var(--color-gray-4)]">
                {ethToPay} ETH
              </span>
            </div>
          </div>


        </div>
        <div className="flex flex-col gap-3 mt-3">
        <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              ETH Price USD
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              $ {ethPrice} USD
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Price Token ETH
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
            {tokenPrice} ETH
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Price Token USD
            </span>
            <span className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
            ${priceTokenUSD} USD 
            </span>
          </p>

           <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Pay ETH
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              {ethToPay} ETH
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            Pay USD
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              ${usdConversion } USD
            </span>
          </p>
          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Earn balance three years ETH
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              {earnBalance} ETH
            </span>
          </p>

          <p className="flex items-center justify-between text-sm leading-[150%]">
            <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Earn balance three years USD
            </span>
            <span className="eth-to-pay text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)]">
              ${earnBalanceUSD} USD
            </span>
          </p>
        
        </div>

        
        {isClient ? 
        <button onClick={handleBuyToken} className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2 mt-8">
                 Buy
        </button>     :         <button className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary-4)] rounded-lg p-2 mt-8">
          Connect Wallet
        </button>}

      </div>
      </div>
    </div>
  );
};

export default NftDetailsCard;
