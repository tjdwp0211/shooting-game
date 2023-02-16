import React, { useEffect } from "react";
import Presenter from "./Presenter";
import { useDispatch, useSelector } from "react-redux";
import { clearGameState, Store } from "../../redux/root";
import { ContainerProps } from "../../type/components/checkScoreType";

function Container({ setGameProgress }: ContainerProps) {
  const dispatch = useDispatch();
  const { timeToClear, stackingScore } = useSelector(
    (state: Store) => state.gameState
  );
  const localStorageItems = JSON.parse(localStorage.getItem("dashboard")) || [];

  const date = new Date();
  const playTimes = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    const { length } = stackingScore.filter(el => el);
    const newItem = [
      ...localStorageItems,
      {
        playTimes: playTimes,
        timeToClear: timeToClear,
        stackingScore: stackingScore.reduce((prev, cur) => prev + cur, 0),
        makeHit: length,
      },
    ];
    return () => localStorage.setItem("dashboard", JSON.stringify(newItem));
  }, []);

  const resetGameState = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(clearGameState());
    setGameProgress(prev => ({ ...prev, start: false, checkScore: false }));
  };

  return <Presenter resetGameState={resetGameState} />;
}

export default Container;
