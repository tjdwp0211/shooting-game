import React, { useState } from "react";
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
  const [playerNameInput, setPlayerNameInput] = useState({
    value: "",
    blocking: false,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: eventValue } = e.target;
    if (eventValue.length <= 6)
      setPlayerNameInput(prev => ({
        ...prev,
        value: eventValue,
        blocking: false,
      }));
    else
      setPlayerNameInput(prev => ({
        ...prev,
        value: eventValue,
        blocking: true,
      }));
  };

  const handleSubmit = (
    e: React.FormEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => {
    e.preventDefault();
    if (playerNameInput.value.length <= 1)
      setPlayerNameInput(prev => ({ ...prev, blocking: true }));
    else if (!playerNameInput.blocking) savePlayerScore();
  };

  const resetGameState = () => {
    dispatch(clearGameState());
    setGameProgress(prev => ({ ...prev, start: false, checkScore: false }));
  };

  const savePlayerScore = () => {
    const { length } = stackingScore.filter(el => el);
    const newItem = [
      ...localStorageItems,
      {
        playerName: playerNameInput.value,
        timeToClear: timeToClear,
        stackingScore: stackingScore.reduce((prev, cur) => prev + cur, 0),
        makeHit: length,
      },
    ];
    localStorage.setItem("dashboard", JSON.stringify(newItem));
    resetGameState();
  };

  return (
    <Presenter
      playerNameInput={playerNameInput}
      resetGameState={resetGameState}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default Container;
