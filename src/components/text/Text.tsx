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

export default React.memo(Text);

const Container = styled.p<TextProps>`
  font-size: ${props => props.size}px;
  ${props => props.weight}
  margin: 0;
  @media (max-width: 768px) or (max-height: 420px) {
    font-size: ${props => props.size / 1.3}px;
  }
`;
