import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import chains from './chains';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  goerli,
  mainnet,
  polygon,
} from 'wagmi/chains';



const {  publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    goerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);


const { connectors } = getDefaultWallets({
  appName: 'Dashbord',
  projectId: 'qp6ery3zm1887z35',
  chains,
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default wagmiClient;
