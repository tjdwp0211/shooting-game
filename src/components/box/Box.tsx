import React from "react";
import styled from "@emotion/styled";
import { black } from "../../style/palette/palette";

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
  color: ${black};
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (width < 768px) {
    flex-direction: column;
    -webkit-flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-height: 375px) or (orientation: landscape) {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
`;
