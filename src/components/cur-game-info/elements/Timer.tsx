import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Store, timeTickTock } from "../../../redux/root";
import { TimerProps } from "../../../type/components/curGameStateType";
import { useDispatch, useSelector } from "react-redux";
import { regularFont } from "../../../style/fonts/inedx";
import Text from "../../text/Text";

function Timer({ gameProgress }: TimerProps) {
  const dispatch = useDispatch();
  const timerRef = useRef<NodeJS.Timeout>();
  const time = useSelector((state: Store) => state.gameState.time);

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  if (timerRef.current || !gameProgress.start) clearTimer();

  const timeIsTickTock = () => {
    timerRef.current = setInterval(
      () => (gameProgress.start ? dispatch(timeTickTock()) : clearTimer()),
      1000
    );

    return time;
  };

  return (
    <Container ticktock={gameProgress.start}>
      {timeIsTickTock()}
      <Text size={24} weight={regularFont}>
        s
      </Text>
    </Container>
  );
}

export default Timer;

const Container = styled.div<{ ticktock: boolean }>`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  p {
    padding: 4px 0px 0px 2px;
  }
  font-size: 30px;
  position: relative;
  animation: ${(props) => props.ticktock && "focus 1s infinite"};
  -webkit-animation: ${(props) => props.ticktock && "focus 1s infinite"};
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
