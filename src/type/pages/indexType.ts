import React, { Dispatch } from "react";
import { ChartDatas } from "../components/chartType";

interface GameProgress {
  start: boolean;
  checkScore: boolean;
}

interface PresenterProps {
  gameProgress: GameProgress;
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
  handleStackingHit: (e: React.MouseEvent) => void;
}

interface UserInteractionProps {
  gameProgress: GameProgress;
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
  handleStackingHit: (e: React.MouseEvent) => void;
}

interface RecentlyGamesProps {
  dataForChart: ChartDatas[];
  playTimes: string[];
}

export type {
  GameProgress,
  PresenterProps,
  UserInteractionProps,
  RecentlyGamesProps,
};
