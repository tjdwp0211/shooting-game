import React from "react";
import styled from "@emotion/styled";

export const Container = styled.div<{ ticktock: boolean }>`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  p {
    padding: 4px 0px 0px 2px;
  }
  font-size: 30px;
  animation: ${props => props.ticktock && "focus 1s infinite"};
  -webkit-animation: ${props => props.ticktock && "focus 1s infinite"};
  @keyframes focus {
    from {
      transform: scale(1);
    }
    5%,
    10%,
    20%,
    30% {
      transform: scale(1.1);
    }
    35%,
    40%,
    50% {
      transform: scale(1.15);
    }
    55%,
    60%,
    70%,
    80%,
    90% {
      transform: scale(1.2);
    }
    95%,
    to {
      transform: scale(1.3);
    }
  }
  @-webkit-keyframes focus {
    from {
      transform: scale(1);
    }
    5%,
    10%,
    20%,
    30% {
      transform: scale(1.1);
    }
    35%,
    40%,
    50% {
      transform: scale(1.15);
    }
    55%,
    60%,
    70%,
    80%,
    90% {
      transform: scale(1.2);
    }
    95%,
    to {
      transform: scale(1.3);
    }
  }
`;
