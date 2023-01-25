import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";

interface CurGameStateProps {
  gameProgress: GameProgress;
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface BulletsProps {
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface TimerProps {
  gameProgress: GameProgress;
}

export type { CurGameStateProps, BulletsProps, TimerProps };
