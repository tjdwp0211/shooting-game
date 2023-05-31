import React from "react";
import styled from "@emotion/styled";
import { boldFont } from "../../style/fonts/inedx";

export const Wrapper = styled.div`
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 2px 16px;
  cursor: default;
  ${boldFont}
  @media (width > 1340px) {
    justify-content: space-around;
  }
`;
