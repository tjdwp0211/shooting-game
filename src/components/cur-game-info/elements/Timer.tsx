import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { TimerProps } from "../../../type/curGameStateType";

function Timer({ gameProgress }: TimerProps) {
  const timerRef = useRef<NodeJS.Timeout>();
  const [timer, setTimer] = useState<number>(0);

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  if (timerRef.current || !gameProgress.start) clearTimer();

  const timeIsTickTock = () => {
    timerRef.current = setInterval(
      () => (gameProgress.start ? setTimer((prev) => prev + 1) : setTimer(0)),
      1000
    );

    return timer;
  };

  return (
    <Container ticktock={gameProgress.start}>{timeIsTickTock()}</Container>
  );
}

export default Timer;

const Container = styled.div<{ ticktock: boolean }>`
  width: fit-content;
  height: fit-content;
  font-size: 30px;
  position: relative;
  animation: ${(props) => props.ticktock && "focus 1s infinite alternate"};
  ::after {
    content: "s";
    position: absolute;
  }
  @keyframes focus {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
`;
