import React from "react";
import { globalStyle } from "../style/global";
import { Global } from "@emotion/react";

function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
