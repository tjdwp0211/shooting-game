import React, { Dispatch } from "react";
import { GameProgress } from "../pages/indexType";

interface Coordinates {
  targetX: number;
  targetY: number;
  distanceDotToDot: number;
}

interface ContainerProps {
  gameProgress: GameProgress;
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface PresenterProps {
  coordinates: Coordinates;
  gameProgress: GameProgress;
  handleCoordinates: (e: React.MouseEvent | React.TouchEvent) => void;
  setGameProgress: Dispatch<React.SetStateAction<GameProgress>>;
}

interface WrapperProps {
  children: React.ReactNode;
  handleTargetBoardClick: (e: React.MouseEvent | React.TouchEvent) => void;
}

interface LineProps {
  rotation: boolean;
}

interface CircleProps {
  radius: number;
  background: string;
}

export type {
  Coordinates,
  ContainerProps,
  PresenterProps,
  WrapperProps,
  LineProps,
  CircleProps,
};
