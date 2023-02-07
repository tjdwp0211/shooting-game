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
  dataForChart: ChartDatas[];
}

export type { GameProgress, PresenterProps };
