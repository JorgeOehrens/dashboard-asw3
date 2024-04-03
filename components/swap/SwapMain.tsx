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
import walletBalanceETH from "@/utils/walletBalanceETH";
import walletBalanceusd from "@/utils/walletBalanceUSD";
import WalletBalance from "@/components/home/WalletBalance";
import EarnBalance from "@/components/home/EarnBalance";
import withdrawBalanceUSD from "@/utils/withdrawBalanceUSD";
import MarketData from "../nftDetails/bidHistory";
import withdrawBalanceETH from "@/utils/withdrawBalanceETH";

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
  const [priceTokenUSD2, setPriceTokenUSD2] = useState('0'); 
  const [walletBalanceUSD, setWalletBalanceUSD] = useState('0'); 
  const [selectedToken, setSelectedToken] = useState(MarketData[0]);

  const [balanceWalletETH, setBalanceWalletETH] = useState('0');
  const [priceTokenUSD, setPriceTokenUSD] = useState('0'); 
  const [earnBalanceUSD, setEarnBalanceUSD] = useState('0'); 

  const [tokenPrice, settokenPrice] = useState('0'); 
  const [ethPrice, setethPrice] = useState('0'); 
  const [ethToPay, setEthToPay] = useState('0'); 
  const [usdConversion, setUsdConversion] = useState('0'); 
  const [earnBalance, setEarnBalance] = useState('0'); 
  const [withdrawBalanceUSD1, setWithdrawBalanceUSD] = useState('0'); 

  const [withdrawWalletETH, setWithdrawWalletETH] = useState('0');
  useEffect(() => {
    const fetchBalances = async () => {
      if (isClient) { 


        
        const ethPrice1 = await ethPriceUsd();
        setethPrice(ethPrice1);

        const tokenBalance1 = await tokenPriceEth(MarketData[0].adress_sales);
        settokenPrice(tokenBalance1);
        const usdBalance = await walletBalanceusd();
        setWalletBalanceUSD(usdBalance); 
        const ethBalance = await walletBalanceETH();
        setBalanceWalletETH(ethBalance);
        const usdWithdraw = await withdrawBalanceUSD();
        setWithdrawBalanceUSD(usdWithdraw);

         
        const ethWithdraw = await withdrawBalanceETH();
        setWithdrawWalletETH(ethWithdraw);
      }
    };

    fetchBalances();
  }, [isClient]); 

  

  const [nToken, setNToken] = useState("");
  useEffect(() => {
  const calculateEthToPay = () => {
    if ((tokenPrice) !="0"&& (nToken) !="0") { 
      const ethToPayCalculated = Number(tokenPrice) * Number(nToken);
      setEthToPay(ethToPayCalculated.toFixed(2));
    }
  };

  calculateEthToPay();
}, [tokenPrice, nToken]);

useEffect(() => {
  const calculateUsdConversion = () => {
    const usdValue = Number(ethToPay) * Number(ethPrice);
    setUsdConversion(usdValue.toFixed(2));
    
  };

  calculateUsdConversion();
}, [ethToPay, ethPrice]);
useEffect(() => {
  const calculateEarnBalance = () => {
    const months = 36;
    const monthlyInterest = 0.007; 
    if (ethToPay !== '0') {
      const earnBalanceCalculated = Number(ethToPay) * monthlyInterest * months;
      setEarnBalance(earnBalanceCalculated.toFixed(2)); 
      const earnBalanceCalculatedUSD = earnBalanceCalculated * Number(ethPrice);
      setEarnBalanceUSD(earnBalanceCalculatedUSD.toFixed(2)); 


      
    }
  };

  calculateEarnBalance();
}, [ethToPay]);
  const handleBuyToken = async () => {
    if(isClient) { 
      console.log(selectedToken.adress_sales);

      await BuyToken(nToken, selectedToken.adress_sales);
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
  const handleTokenChange =async (token: any) => {
    setSelectedToken(token);
    const tokenBalance1 = await tokenPriceEth(token.adress_sales);
    settokenPrice(tokenBalance1);
    

  };
  return (
    <section className="w-full h-[77vh] sm:h-[100vh]">
           <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Wallet Balance Section */}
          <WalletBalance 
          balanceWalletETH={balanceWalletETH}
          balanceWalletUSD={walletBalanceUSD}

           />
       <EarnBalance
                              balanceWalletETH={withdrawWalletETH}
                              balanceWalletUSD={withdrawBalanceUSD1}
          />
        
        </div>
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
              <Select data={MarketData} onChange={handleTokenChange}/>
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
