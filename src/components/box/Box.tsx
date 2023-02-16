import React from "react";
import styled from "@emotion/styled";
import { lightGray, black } from "../../style/palette/palette";

interface BoxProps {
  children: React.ReactNode;
  bgColor: string;
}

function Box({ children, bgColor }: BoxProps) {
  return <Container bgColor={bgColor}>{children}</Container>;
}

export default Box;

const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  color: ${black};
  display: flex;
  @media (prefers-color-scheme: dark) {
    background-color: ${lightGray};
    color: white;
  }
  @media (width < 642px) {
    flex-direction: column;
  }
`;
