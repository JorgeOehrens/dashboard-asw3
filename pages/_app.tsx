import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import wagmiClient from "@/lib/wagmiClient";
import {  RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains,  WagmiConfig } from 'wagmi';
import chains from "@/lib/chains";
import '@rainbow-me/rainbowkit/styles.css';

interface ComponentWithLayout {
  getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps) {
  if ((Component as ComponentWithLayout)?.getLayout) {

    return (
      <>
        <WagmiConfig config={wagmiClient}>  
        <RainbowKitProvider chains={chains}>

        <Head>
          <title>Dashboard | Asset Web 3 </title>
          <meta name="description" content="AsSETS Digital" />
          <link rel="icon" href="favicon.ico" />
        </Head>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <Component {...pageProps} />
          </ThemeProvider>
          </RainbowKitProvider>

        </WagmiConfig>


      </>
    );
  }

  return (
    <>
        <WagmiConfig config={wagmiClient}>  
        <RainbowKitProvider chains={chains}>
        <Head>
          <title>Dashboard | Asset Web 3 </title>
          <meta name="description" content="AsSETS Digital" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Layout>

              <Component {...pageProps} />      
          </Layout>

        </ThemeProvider>
        </RainbowKitProvider>

</WagmiConfig>
  </>
  );
}
