/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Chakra } from "./src/Chakra";
import Header from './src/components/Header';

interface IApp extends AppProps {
  pageProps: {
    cookies: any
  };
}

function MyApp({ Component, pageProps }: IApp) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Header />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
