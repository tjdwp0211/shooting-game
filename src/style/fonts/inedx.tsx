import React from "react";
import { css } from "@emotion/react";
import {
  robotoBold,
  robotoMedium,
  robotoRegular,
  robotoLight,
  robotoThin,
} from "./roboto";

const boldFont = css`
  font-family: ${robotoBold.style.fontFamily};
`;
const mediumFont = css`
  font-family: ${robotoMedium.style.fontFamily};
`;
const regularFont = css`
  font-family: ${robotoRegular.style.fontFamily};
`;
const lightFont = css`
  font-family: ${robotoLight.style.fontFamily};
`;
const thinFont = css`
  font-family: ${robotoThin.style.fontFamily};
`;

export { boldFont, mediumFont, regularFont, lightFont, thinFont };
