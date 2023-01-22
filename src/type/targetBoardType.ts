import React from "react";

interface TargetCoordinates {
  x: number;
  y: number;
}

interface ContainerProps {
  gameProgress: { start: boolean; checkScore: boolean };
  handleStackingHit: (e: React.MouseEvent) => void;
}

interface PresenterProps {
  targetCoordinates: TargetCoordinates;
  gameProgress: { start: boolean; checkScore: boolean };
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
