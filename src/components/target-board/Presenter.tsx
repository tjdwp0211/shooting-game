import React from "react";
import styled from "@emotion/styled";
import Circle from "./elements/Circle";

function TargetBoard() {
  return (
    <Wrapper size={"10vw"}>
      <Circle radius={100}></Circle>
      <Circle radius={70}></Circle>
      <Circle radius={40}></Circle>
    </Wrapper>
  );
}

export default TargetBoard;

const Wrapper = styled.div<{ size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size};
  max-width: 100px;
  min-width: 52px;
  height: ${(props) => props.size};
  max-height: 100px;
  min-height: 52px;
  position: absolute;
  top: 100px;
  left: 40px;
  animation: popout 0.3s ease;
  @keyframes popout {
    80% {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
`;
