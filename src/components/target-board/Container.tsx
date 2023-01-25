import React, { useCallback, useState } from "react";
import Presenter from "./Presenter";
import {
  ContainerProps,
  TargetCoordinates,
} from "../../type/components/targetBoardType";

function Container({ gameProgress, handleStackingHit }: ContainerProps) {
  const [targetCoordinates, setTargetCoordinates] = useState<TargetCoordinates>(
    {
      x: Math.random(),
      y: Math.random(),
    }
  );

  const randomCoordinates = useCallback(
    () => ({
      x: Math.random() * (1 - 0.2) + 0.2,
      y: Math.random() * (1 - 0.2) + 0.2,
    }),
    []
  );

  const handleCoordinates = () => {
    setTargetCoordinates({ ...randomCoordinates() });
  };

  return (
    <Presenter
      gameProgress={gameProgress}
      targetCoordinates={targetCoordinates}
      handleStackingHit={handleStackingHit}
      handleCoordinates={handleCoordinates}
    />
  );
}

export default Container;
