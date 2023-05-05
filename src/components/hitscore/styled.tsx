import React from "react";
import styled from "@emotion/styled";
import * as PALETTE from "../../style/palette/palette";
import * as FONT from "../../style/fonts/inedx";

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p:nth-of-type(1) {
    padding: 4px 0px 0px 0px;
  }
  p:nth-of-type(3) {
    padding: 8px 0px 0px 0px;
  }
`;

export const HistoryBoard = styled.article`
  width: 20%;
  min-width: calc(34px * 10);
  height: 20vh;
  min-height: calc(24px * 3);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;
  background-color: #9b9b9b72;
`;

export const Block = styled.div<{ bgColor: string }>`
  width: calc(10% - 2px);
  height: calc((100% / 3) - 2px);
  color: ${PALETTE.white};
  background-color: ${props => props.bgColor};
  font-size: 16px;
  ${FONT.boldFont}
  box-shadow: 0px 0px 4px 0px ${PALETTE.lightBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 4px;
`;
