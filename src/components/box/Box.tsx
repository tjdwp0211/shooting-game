import React from "react";
import styled from "@emotion/styled";
import { lightGray, black } from "../../style/palette/palette";

interface BoxProps {
  children: React.ReactNode;
}

function Box({ children }: BoxProps) {
  return <Container>{children}</Container>;
}

export default Box;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
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
