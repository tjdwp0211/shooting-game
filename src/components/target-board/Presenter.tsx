import React from "react";
import styled from "@emotion/styled";
import Circle from "./elements/Circle";

interface PresenterProps {
  handleClicked: () => void;
}

function Presenter({ handleClicked }: PresenterProps) {
  return (
    <Wrapper size={"10vw"} onClick={handleClicked}>
      <Circle radius={100}></Circle>
      <Circle radius={70}></Circle>
      <Circle radius={40}></Circle>
    </Wrapper>
  );
}

export default Presenter;

const Wrapper = styled.div<{
  size: string;
}>`
  width: ${(props) => props.size};
  max-width: 100px;
  min-width: 52px;
  height: ${(props) => props.size};
  max-height: 100px;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: popout 0.3s ease;
  @keyframes popout {
    from {
      transform: scale(0);
    }
    80% {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
`;
