import React from "react";
import { GameProgress } from "../pages/indexType";

interface TargetCoordinates {
  x: number;
  y: number;
}

interface ContainerProps {
  gameProgress: GameProgress;
  handleStackingScore: (e: React.MouseEvent) => void;
}

interface PresenterProps {
  targetCoordinates: TargetCoordinates;
  gameProgress: GameProgress;
  handleCoordinates: () => void;
  handleStackingScore: (e: React.MouseEvent) => void;
}

interface WrapperProps {
  children: React.ReactNode;
}

interface LineProps {
  rotation: boolean;
}

interface CircleProps {
  radius: number;
  background: string;
  point: string;
  handleCircleClick: (e: React.MouseEvent) => void;
}

export type {
  TargetCoordinates,
  ContainerProps,
  PresenterProps,
  WrapperProps,
  LineProps,
  CircleProps,
};
