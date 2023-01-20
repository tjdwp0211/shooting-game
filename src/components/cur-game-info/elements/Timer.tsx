import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { TimerProps } from "../../../type/curGameStateType";

function Timer({ gameStart }: TimerProps) {
  const timerRef = useRef<NodeJS.Timeout>();
  const [timer, setTimer] = useState<number>(0);

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  if (timerRef.current || !gameStart) clearTimer();

  const timeIsTickTock = () => {
    timerRef.current = setInterval(
      () => setTimer((prev) => (gameStart ? prev + 1 : 0)),
      1000
    );

    return timer;
  };

  return <Container>{timeIsTickTock()}s</Container>;
}

export default Timer;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 30px;
`;
