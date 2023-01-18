import React from "react";

interface TargetInfo {
  x: number;
  y: number;
  hit: boolean;
}

interface ContainerProps {
  gameStart: boolean;
  handleGameStart: () => void;
}

interface PresenterProps {
  targetInfo: TargetInfo;
  gameStart: boolean;
  handleHit: () => void;
  handleGameStart: () => void;
}

export type { TargetInfo, ContainerProps, PresenterProps };
