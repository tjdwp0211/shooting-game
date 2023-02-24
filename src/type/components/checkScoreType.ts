import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";
import { PlayerName } from "./playerNameInputType";

interface ContainerProps {
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface PresenterProps {
  inputState: PlayerName;
  resetGameState: () => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => void;
}

export type { ContainerProps, PresenterProps };
