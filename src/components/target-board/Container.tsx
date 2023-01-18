import React, { useCallback, useState } from "react";
import Presenter from "./Presenter";
import { ContainerProps, TargetInfo } from "../../type/targetBoardType";

function Container({ gameStart, handleGameStart }: ContainerProps) {
  const [targetInfo, setTargetInfo] = useState<TargetInfo>({
    x: Math.random(),
    y: Math.random(),
    hit: false,
  });

  const randomCoordinates = useCallback(
    () => ({
      x: Math.random() * (1 - 0.2) + 0.2,
      y: Math.random() * (1 - 0.2) + 0.2,
    }),
    []
  );

  const handleHit = () => {
    setTargetInfo((prev) => ({
      ...prev,
      hit: !prev.hit,
      ...randomCoordinates(),
    }));
  };
  console.log(gameStart);

  return (
    <Presenter
      gameStart={gameStart}
      targetInfo={targetInfo}
      handleGameStart={handleGameStart}
      handleHit={handleHit}
    />
  );
}

export default Container;
