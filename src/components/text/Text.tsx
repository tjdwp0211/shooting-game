import React from "react";
import styled from "@emotion/styled";
import { TextProps } from "../../type/components/textType";

function Text({ size, weight, children, className }: TextProps) {
  return (
    <Container size={size} weight={weight} className={className}>
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
