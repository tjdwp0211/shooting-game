import React from "react";
import { css } from "@emotion/react";
import { regularFont } from "./fonts/inedx";
import { black, blue, lightGray, white } from "./palette/palette";

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0px;
    background-color: ${blue};
    color: ${white};
    @media (prefers-color-scheme: dark) {
      background-color: ${black};
      color: ${lightGray};
    }
    ${regularFont}
  }
  a,
  button {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
  }
  .text-button:hover {
    animation: button-hover-motion 0.2s ease;
    @keyframes button-hover-motion {
      from {
        transform: scale(0.95);
      }
      50% {
        transform: scale(1.05);
      }
      to {
        transform: scale(1);
      }
    }
  }
  a {
    text-decoration: none;
    color: ${white};
  }
`;

export { globalStyle };
