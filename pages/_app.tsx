import type { AppProps } from "next/app";
import Navbar from "@/components/website/Navbar/Navbar";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import customTheme from "@/styles/theme";
import Head from "next/head";
import SEO from "@/next-seo-config";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <IconContext.Provider value={{ size: "1.4rem" }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        </Head>
        <DefaultSeo {...SEO} />
        <Navbar />
        <Box as="main" pt="24">
          <Component {...pageProps} />
        </Box>
      </IconContext.Provider>
    </ChakraProvider>
  );
}
