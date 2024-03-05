import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import {
  ChechIfWalletConnected,
  connectWallet,
  getBalance,
  connectingTOKEN_SALEContract,
  connectingTOKENContract,
} from "../utils/index";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //  STATE VARIABLE
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState();
  const [nativeToken, setNativeToken] = useState();
  const [tokenHolders, setTokenHolders] = useState([]);
  const [tokenSale, setTokenSale] = useState();
  const [currentHolder, setCurrentHolder] = useState();

  const fetchInitialData = async () => {
    try {
      //GET USER ACCOUNT
      const account = await ChechIfWalletConnected();
      //GET USER BALANCE
      const balance = await getBalance();
      setBalance(ethers.utils.formatEther(balance.toString()));
      setAddress(account);

      //TOKEN_CONTRACT
      const TOKEN_CONTRACT = await connectingTOKENContract();
      console.log("CONTRACT TOKEN :: " ,TOKEN_CONTRACT )

      let tokenBalance;
      if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
      } else {
        tokenBalance = 0;
      }

      const tokenName = await TOKEN_CONTRACT.name();
      const tokenSymbol = await TOKEN_CONTRACT.symbol();
      const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
      const tokenHolders = await TOKEN_CONTRACT.totalTokensTransferred();

      // const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
      const tokenAddress = await TOKEN_CONTRACT.address;

      const nativeToken = {
        tokenAddress: tokenAddress,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol,
        // tokenOwnerOfContract: tokenOwnerOfContract,
        tokenTotalSupply: tokenTotalSupply.toString(),
        tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
        tokenHolders: tokenHolders.toString(),
      };
      setNativeToken(nativeToken);

      //TOKEN SALE CONTRACT
      const TOKEN_SALE_CONTRACT = await connectingTOKEN_SALEContract();

      console.log("CONTRACT TOKEN SALE:: " ,TOKEN_SALE_CONTRACT )
      const tokenPrice = await TOKEN_SALE_CONTRACT.tokenPrice();
      const tokenSold = await TOKEN_SALE_CONTRACT.tokensSold();

      console.log(" TOKEN PRICE:: " ,ethers.utils.formatEther(tokenPrice.toString()))

      const tokenSale = {
        tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
        tokenSold: tokenSold.toNumber(),
        tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
        tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString())
      };

      setTokenSale(tokenSale);
      console.log(ethers.utils.formatEther(tokenPrice.toString()));
      console.log(nativeToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  //BUY TOKEN
  const buyToken = async (nToken) => {
    try {

      
      const pricePerTokenETH = ethers.utils.parseUnits("0.04", "ether"); // 0.04 ETH por token
      // Calcula el costo total de los tokens
      const totalTokenCost = pricePerTokenETH.mul(nToken);       
      const contract = await connectingTOKEN_SALEContract();

      const buying = await contract.buyTokens(nToken, {
        value: totalTokenCost
    
      });
      await buying.wait();
      console.log(buying);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //NATIVE TOKEN TRANSFER
  const transferNativeToken = async () => {
    try {
      const TOKEN_SALE_ADDRESS = "0xa55e59b4d2501351d521fba157992f8e06f59799";
      const TOKEN_AMOUNT = 2;
      const tokens = TOKEN_AMOUNT.toString();
      const transferAmount = ethers.utils.parseEther(tokens);

      const contract = await connectingTOKENContract();
      const transaction = await contract.transfer(
        TOKEN_SALE_ADDRESS,
        transferAmount
      );
      console.log(contract);

      await transaction.wait();
      console.log(transaction);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        transferNativeToken,
        buyToken,
        setAddress,
        connectWallet,
        currentHolder,
        tokenSale,
        tokenHolders,
        nativeToken,
        balance,
        address,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
