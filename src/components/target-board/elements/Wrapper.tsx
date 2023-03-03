import React from "react";
import styled from "@emotion/styled";
import { WrapperProps } from "../../../type/components/targetBoardType";

function Wrapper(props: WrapperProps) {
  const { children } = props;

  return <Container>{children}</Container>;
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
  -webkit-animation: come-out-motion 0.2s ease;
  opacity: 0.9;
  cursor: pointer;
  &,
  & > * {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :active {
    animation: slip-away-motion 0.2s ease;
    -webkit-animation: slip-away-motion 0.2s ease;
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
  @-webkit-keyframes come-out-motion {
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

  @-webkit-keyframes slip-away-motion {
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
