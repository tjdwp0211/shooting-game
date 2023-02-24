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
  const [inputState, setInputState] = useState({
    value: "",
    blocking: false,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: eventValue } = e.target;
    if (eventValue.length <= 6)
      setInputState(prev => ({ ...prev, value: eventValue, blocking: false }));
    else
      setInputState(prev => ({ ...prev, value: eventValue, blocking: true }));
  };

  const handleSubmit = (
    e: React.FormEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => {
    e.preventDefault();
    if (inputState.value.length <= 1)
      setInputState(prev => ({ ...prev, blocking: true }));
    else if (!inputState.blocking) savePlayerScore();
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
        playerName: inputState.value,
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
      inputState={inputState}
      resetGameState={resetGameState}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default Container;
