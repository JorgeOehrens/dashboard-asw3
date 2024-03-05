import { configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import {
    arbitrum,
    goerli,
    mainnet,
    optimism,
    polygon,
    base,
    zora,
  } from 'wagmi/chains';




  
const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      mainnet,
      polygon,
      goerli,
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
    ],
    [publicProvider()]
  );



export default chains;
