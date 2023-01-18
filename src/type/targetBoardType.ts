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

interface WrapperProps {
  children: React.ReactNode;
  handleHit: () => void;
}

interface LineProps {
  rotation: boolean;
}

interface CircleProps {
  radius: number;
}

export type {
  TargetInfo,
  ContainerProps,
  PresenterProps,
  WrapperProps,
  LineProps,
  CircleProps,
};
