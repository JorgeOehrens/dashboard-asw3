import { configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import {
 
    sepolia,
    mainnet


  } from 'wagmi/chains';




  
const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      sepolia,
      mainnet,

      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ],
    [publicProvider()]
  );



export default chains;
