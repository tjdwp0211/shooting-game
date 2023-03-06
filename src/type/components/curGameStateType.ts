import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";

interface CurGameStateProps {
  gameProgress: GameProgress;
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface BulletsProps {
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface BulletImgs {
  remainBullets: number;
}

interface TimerProps {
  gameProgress: GameProgress;
}

export type { CurGameStateProps, BulletImgs, BulletsProps, TimerProps };
