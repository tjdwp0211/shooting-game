import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";

interface PlayerName {
  value: string;
  blocking: boolean;
}

interface ContainerProps {
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface PresenterProps {
  playerNameInput: PlayerName;
  setPlayerNameInput: Dispatch<React.SetStateAction<PlayerName>>;
  savePlayerScore: () => void;
  resetGameState: () => void;
}

interface PlayerNameInputProps {
  playerNameInput: PlayerName;
  setPlayerNameInput: Dispatch<React.SetStateAction<PlayerName>>;
}

export type { ContainerProps, PresenterProps, PlayerNameInputProps };
