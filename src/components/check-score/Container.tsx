import React, { useEffect } from "react";
import Presenter from "./Presenter";
import { useDispatch, useSelector } from "react-redux";
import { clearGameState, Store } from "../../redux/root";
import { ContainerProps } from "../../type/components/checkScoreType";

function Container({ setGameProgress }: ContainerProps) {
  const dispatch = useDispatch();
  const { time, stackingHit } = useSelector((state: Store) => state.gameState);
  const localstorageItem = JSON.parse(localStorage.getItem("dashboard")) || [];

  useEffect(() => {
    const { length } = stackingHit.filter((el) => el);
    const newItem = [
      ...localstorageItem,
      { time: time, stackingHit: stackingHit, makeHit: length },
    ];
    return () => localStorage.setItem("dashboard", JSON.stringify(newItem));
  }, []);

  const resetGameState = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(clearGameState());
    setGameProgress((prev) => ({ ...prev, start: false, checkScore: false }));
  };

  return <Presenter resetGameState={resetGameState} />;
}

export default Container;
