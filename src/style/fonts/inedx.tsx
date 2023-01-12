import React from "react";
import { css } from "@emotion/react";
import {
  notoSansKrBold,
  notoSansKrMedium,
  notoSansKrRegular,
  notoSansKrLight,
  notoSansKrThin,
} from "./notoSans";
import {
  robotoBold,
  robotoMedium,
  robotoRegular,
  robotoLight,
  robotoThin,
} from "./roboto";

const boldFont = css`
  font-family: ${notoSansKrBold.style.fontFamily},
    ${robotoBold.style.fontFamily};
`;
const mediumFont = css`
  font-family: ${notoSansKrMedium.style.fontFamily},
    ${robotoMedium.style.fontFamily};
`;
const regularFont = css`
  font-family: ${notoSansKrRegular.style.fontFamily},
    ${robotoRegular.style.fontFamily};
`;
const lightFont = css`
  font-family: ${notoSansKrLight.style.fontFamily},
    ${robotoLight.style.fontFamily};
`;
const thinFont = css`
  font-family: ${notoSansKrThin.style.fontFamily},
    ${robotoThin.style.fontFamily};
`;

export { boldFont, mediumFont, regularFont, lightFont, thinFont };
