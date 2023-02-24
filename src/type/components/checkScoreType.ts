import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";

interface PlayerName {
  value: string;
  blocking?: boolean;
}

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

interface PlayerNameInputProps {
  mainColor: string;
  inputState: PlayerName;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { ContainerProps, PresenterProps, PlayerNameInputProps };
