import React from "react";
import { GameProgress } from "../pages/indexType";

interface Coordinates {
  targetX: number;
  targetY: number;
  userClickX: number;
  userClickY: number;
}

interface ContainerProps {
  gameProgress: GameProgress;
  handleStackingScore: (e: React.MouseEvent) => void;
}

interface PresenterProps {
  coordinates: Coordinates;
  gameProgress: GameProgress;
  handleCoordinates: (e: React.MouseEvent) => void;
  handleStackingScore: (e: React.MouseEvent) => void;
}

interface WrapperProps {
  children: React.ReactNode;
  handleTargetBoardClick: (e: React.MouseEvent) => void;
}

interface LineProps {
  rotation: boolean;
}

interface CircleProps {
  radius: number;
  background: string;
  point: string;
}

export type {
  Coordinates,
  ContainerProps,
  PresenterProps,
  WrapperProps,
  LineProps,
  CircleProps,
};
