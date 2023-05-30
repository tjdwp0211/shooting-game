import React, { useRef } from "react";
import * as S from "./styled";
import { Store, timeTickTock } from "../../redux/root";
import { TimerProps } from "../../type/components/curGameStateType";
import { useDispatch, useSelector } from "react-redux";
import { regularFont } from "../../style/fonts/inedx";
import Text from "../text/Text";

function Timer({ gameProgress }: TimerProps) {
  const dispatch = useDispatch();
  const timerRef = useRef<NodeJS.Timeout>();
  const time = useSelector((state: Store) => state.gameState.timeToClear);

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
    <S.Container ticktock={gameProgress.start}>
      {timeIsTickTock()}
      <Text size={24} weight={regularFont}>
        s
      </Text>
    </S.Container>
  );
}

export default Timer;
