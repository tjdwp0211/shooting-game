import React from "react";
import styled from "@emotion/styled";
import { WrapperProps } from "../../../type/targetBoardType";

function Wrapper({ children, handleHit }: WrapperProps) {
  return <Container onClick={handleHit}>{children}</Container>;
}

export default Wrapper;

const Container = styled.div`
  width: 10vw;
  max-width: 100px;
  min-width: 52px;
  height: 10vw;
  max-height: 100px;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: come-out-motion 0.2s ease;
  :active {
    animation: slip-away-motion 0.2s ease;
  }

  @keyframes come-out-motion {
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

  @keyframes slip-away-motion {
    from {
      transform: scale(1);
    }
    80% {
      transform: scale(0.5);
    }
    to {
      transform: scale(0);
    }
  }
`;
