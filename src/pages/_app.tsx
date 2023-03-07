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
        <title>Aiming Trainer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content="Test your aim" />
        <meta
          property="og:title"
          name="description"
          content="If you click center of target, you can get more score! Test your aim and check your score for Free."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aimingtrainer.com/" />
        <meta property="og:article:author" content="Aim Trainer Game" />
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
