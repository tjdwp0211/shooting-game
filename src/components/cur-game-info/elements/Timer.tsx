import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { TimerProps } from "../../../type/curGameStateType";

function Timer({ gameStart }: TimerProps) {
  const timerRef = useRef<NodeJS.Timeout>();
  const [timer, setTimer] = useState<number>(0);

  const timeIsTickTock = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    timerRef.current = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return timer;
  };

  if (!gameStart) return <Container>{timer}s</Container>;
  else return <Container>{timeIsTickTock()}s</Container>;
}

export default Timer;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 30px;
`;
