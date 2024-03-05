import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";


interface ComponentWithLayout {
  getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps) {
  if ((Component as ComponentWithLayout)?.getLayout) {

    return (
      <>

            <Head>
              <title>Dashboard | Asset Web 3 </title>
              <meta name="description" content="AsSETS Digital" />
              <link rel="icon" href="favicon.ico" />
            </Head>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="dark"
            >
              <Component {...pageProps} />
            </ThemeProvider>


      </>
    );
  }

  return (
    <>

        <Head>
          <title>Dashboard | Asset Web 3 </title>
          <meta name="description" content="AsSETS Digital" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <Layout>

              <Component {...pageProps} />      
          </Layout>

        </ThemeProvider>

  </>
  );
}
