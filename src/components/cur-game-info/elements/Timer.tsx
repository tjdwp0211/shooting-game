import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { boldFont } from "../../../style/fonts/inedx";

function Timer() {
  const timerRef = useRef<NodeJS.Timeout>();
  const [timer, setTimer] = useState<number>(0);

  if (timerRef.current) {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  timerRef.current = setInterval(() => setTimer((prev) => prev + 1), 1000);

  return <Container>{timer}s</Container>;
}

export default Timer;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 30px;
  ${boldFont}
`;
