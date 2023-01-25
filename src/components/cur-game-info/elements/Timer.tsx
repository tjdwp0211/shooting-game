import React, { useRef } from "react";
import styled from "@emotion/styled";
import { RootStore, timeTickTock } from "../../../redux/root";
import { TimerProps } from "../../../type/components/curGameStateType";
import { useDispatch, useSelector } from "react-redux";

function Timer({ gameProgress }: TimerProps) {
  const dispatch = useDispatch();
  const timerRef = useRef<NodeJS.Timeout>();
  const time = useSelector((state: RootStore) => state.gameState.time);

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
