import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";

interface ContainerProps {
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface PresenterProps {
  handlePlayerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  savePlayerScore: (e: React.FormEvent | React.MouseEvent) => void;
  resetGameState: () => void;
}

export type { ContainerProps, PresenterProps };
