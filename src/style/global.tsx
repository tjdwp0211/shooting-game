import React from "react";
import { css } from "@emotion/react";
import { regularFont } from "./fonts/inedx";
import { blue, white } from "./palette/palette";

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0px;
    width: 100vw;
    height: 100vh;
    color: ${white};
    background-color: ${blue};
    ${regularFont}
  }
  a,
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${white};
  }
`;

export { globalStyle };
