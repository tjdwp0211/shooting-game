import React, { Dispatch } from "react";
import { ChartDatas } from "../components/chartType";

interface GameProgress {
  start: boolean;
  checkScore: boolean;
}

interface PresenterProps {
  gameProgress: GameProgress;
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface UserInteractionProps {
  gameProgress: GameProgress;
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface RecentlyGamesProps {
  dataForChart: ChartDatas[];
  playerNames: string[];
}

export type {
  GameProgress,
  PresenterProps,
  UserInteractionProps,
  RecentlyGamesProps,
};
