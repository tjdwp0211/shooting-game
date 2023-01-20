import React, { Dispatch } from "react";

interface CurGameStateProps {
  gameProgress: { start: boolean; checkScore: boolean };
  setGameProgress: Dispatch<
    React.SetStateAction<{ start: boolean; checkScore: boolean }>
  >;
}

interface BulletsProps {
  setGameProgress: Dispatch<
    React.SetStateAction<{ start: boolean; checkScore: boolean }>
  >;
}

interface TimerProps {
  gameProgress: { start: boolean; checkScore: boolean };
}

export type { CurGameStateProps, BulletsProps, TimerProps };
