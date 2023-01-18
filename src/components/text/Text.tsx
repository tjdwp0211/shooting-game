import React from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

interface TextProps {
  size: number;
  weight: SerializedStyles;
  children: React.ReactNode;
}

function Text({ size, weight, children }: TextProps) {
  return (
    <Container size={size} weight={weight}>
      {children}
    </Container>
  );
}

export default Text;

const Container = styled.p<TextProps>`
  font-size: ${(props) => props.size}px;
  ${(props) => props.weight}
`;
