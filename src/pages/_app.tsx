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
      </Head>
      <Global styles={globalStyle} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
