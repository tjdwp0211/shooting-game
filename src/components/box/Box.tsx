import React from "react";
import styled from "@emotion/styled";
import * as PALETTE from "../../style/palette/palette";

interface BoxProps {
  children: React.ReactNode;
  bgColor: string;
}

function Box({ children, bgColor }: BoxProps) {
  return <BoxContainer bgColor={bgColor}>{children}</BoxContainer>;
}

export default Box;

const BoxContainer = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  color: ${PALETTE.black};
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-around;
  -webkit-align-items: center;
  -webkit-justify-content: space-around;
  gap: 12px;
  @media only screen and (max-width: 768px) {
    @media (max-height: 375px) or (orientation: landscape) {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    flex-direction: column;
    align-items: center;
    -webkit-flex-direction: column;
    -webkit-align-items: center;
  }
`;
