import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";

interface CheckScoreProps {
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

export type { CheckScoreProps };
