import React from "react";
import Head from "next/head";
import store from "../redux/root";
import { Provider } from "react-redux";
import { globalStyle } from "../style/global";
import { Global } from "@emotion/react";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Test Your Click</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={globalStyle} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
