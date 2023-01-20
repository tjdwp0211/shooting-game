import React, { Dispatch } from "react";

interface CurGameStateProps {
  gameStart: boolean;
  setGameStart: Dispatch<React.SetStateAction<boolean>>;
}

interface TimerProps {
  gameStart: boolean;
}

export type { CurGameStateProps, TimerProps };
