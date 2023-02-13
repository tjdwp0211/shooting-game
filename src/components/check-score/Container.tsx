import React, { useEffect } from "react";
import Presenter from "./Presenter";
import { useDispatch, useSelector } from "react-redux";
import { clearGameState, Store } from "../../redux/root";
import { ContainerProps } from "../../type/components/checkScoreType";

function Container({ setGameProgress }: ContainerProps) {
  const dispatch = useDispatch();
  const { timeToClear, stackingHit } = useSelector(
    (state: Store) => state.gameState
  );
  const localStorageItems = JSON.parse(localStorage.getItem("dashboard")) || [];

  const date = new Date();
  const playTimes = `${date.getDate()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  useEffect(() => {
    const { length } = stackingHit.filter(el => el);
    const newItem = [
      ...localStorageItems,
      {
        playTimes: playTimes,
        timeToClear: timeToClear,
        stackingHit: stackingHit,
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
