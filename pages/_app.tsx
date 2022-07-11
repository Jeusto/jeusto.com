import "@fontsource/abhaya-libre";
import "@fontsource/inter";
import "@fontsource/jetbrains-mono";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import customTheme from "../styles/theme";
import GlobalStyle from "../styles/global";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  let system_theme;

  if (typeof window !== "undefined") {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      system_theme = "dark";
    } else {
      system_theme = "light";
    }
  }
  return (
    <GlobalStyle>
      <ChakraProvider resetCSS theme={customTheme}>
        <IconContext.Provider value={{ size: "1.4rem" }}>
          <Head>
            {`<!-- Primary Meta Tags -->`}
            <title>Jeusto — Arhun Saday</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {system_theme === "dark" ? (
              <link rel="icon" href="/white-favicon.ico" />
            ) : (
              <link rel="icon" href="/dark-favicon.ico" />
            )}
            <meta name="theme-color" content="#111111" />
            <meta
              name="description"
              content="Full stack developer in France, an undergraduate computer science student at the University of Strasbourg."
            />
            {`<!-- Open Graph / Facebook -->`}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.jeusto.com/" />
            <meta property="og:title" content="Jeusto — Arhun Saday" />
            <meta
              property="og:image"
              content="https://i.imgur.com/cfTxNyc.png"
            />
            <meta
              property="og:description"
              content="Developer in France, an undergraduate computer science student at the University of Strasbourg."
            />
            {`<!-- Twitter -->`}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.jeusto.com/" />
            <meta property="twitter:title" content="Jeusto — Arhun Saday" />
            <meta
              property="twitter:image"
              content="https://i.imgur.com/cfTxNyc.png"
            />
            <meta
              property="twitter:description"
              content="Developer in France, an undergraduate computer science student at the University of Strasbourg."
            />
          </Head>
          <Navbar />
          <Box pt="24">
            <Component {...pageProps} />
          </Box>
        </IconContext.Provider>
      </ChakraProvider>
    </GlobalStyle>
  );
}
