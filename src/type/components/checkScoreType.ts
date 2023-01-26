import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";

interface ContainerProps {
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface PresenterProps {
  resetGameState: (e: React.MouseEvent) => void;
}

export type { ContainerProps, PresenterProps };
