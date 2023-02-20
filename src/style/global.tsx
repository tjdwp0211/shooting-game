import React from "react";
import { css } from "@emotion/react";
import { regularFont } from "./fonts/inedx";
import { black, white } from "./palette/palette";

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0px;
    background-color: #76914a;
    color: ${white};
    overflow-x: hidden;
    @media (prefers-color-scheme: dark) {
      background-color: ${black};
      color: white;
    }
    ${regularFont}
  }
  input:focus {
    outline: none !important;
  }
  a,
  button {
    cursor: pointer;
    border: none;
    width: fit-content;
    height: fit-content;
  }
  .text-button:hover,
  .text-button:active {
    animation: button-hover-motion 0.2s ease;
    -webkit-animation: button-hover-motion 0.2s ease;
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
    @-webkit-keyframes button-hover-motion {
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
