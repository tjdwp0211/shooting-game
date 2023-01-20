import React from "react";

interface TargetCoordinates {
  x: number;
  y: number;
}

interface ContainerProps {
  gameStart: boolean;
  handleStackingHit: (hit: boolean, e: React.MouseEvent) => void;
}

interface PresenterProps {
  targetCoordinates: TargetCoordinates;
  gameStart: boolean;
  handleCoordinates: () => void;
  handleStackingHit: (hit: boolean, e: React.MouseEvent) => void;
}

interface WrapperProps {
  children: React.ReactNode;
  handleCoordinates: () => void;
  handleStackingHit: (hit: boolean, e: React.MouseEvent) => void;
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
