import React from "react";
import { GameProgress } from "../pages/indexType";

interface TargetCoordinates {
  x: number;
  y: number;
}

interface ContainerProps {
  gameProgress: GameProgress;
  handleStackingHit: (e: React.MouseEvent) => void;
}

interface PresenterProps {
  targetCoordinates: TargetCoordinates;
  gameProgress: GameProgress;
  handleCoordinates: () => void;
  handleStackingHit: (e: React.MouseEvent) => void;
}

interface WrapperProps {
  children: React.ReactNode;
  handleCoordinates: () => void;
  handleStackingHit: (e: React.MouseEvent) => void;
}

interface LineProps {
  rotation: boolean;
}

interface CircleProps {
  radius: number;
  background: string;
}

export type {
  TargetCoordinates,
  ContainerProps,
  PresenterProps,
  WrapperProps,
  LineProps,
  CircleProps,
};
