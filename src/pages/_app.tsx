import React from "react";
import Head from "next/head";
import { globalStyle } from "../style/global";
import { Global } from "@emotion/react";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Test Your Click</title>
      </Head>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
