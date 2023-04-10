import React, { useState } from "react";
import Presenter from "./Presenter";
import { useDispatch, useSelector } from "react-redux";
import { Store, pullTrigger } from "../../redux/root";
import {
  ContainerProps,
  Coordinates,
} from "../../type/components/targetBoardType";

function Container({ gameProgress, setGameProgress }: ContainerProps) {
  const dispatch = useDispatch();
  const { deviceWidth, deviceHeight } = useSelector(
    (state: Store) => state.deviceSize
  );
  const [coordinates, setTargetCoordinates] = useState<Coordinates>({
    targetX: Math.random(),
    targetY: Math.random(),
    calcX: 0,
    calcY: 0,
  });

  const handleCoordinates = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setTargetCoordinates(prev => ({
      ...prev,
      targetX: Math.random() * (1 - 0.2) + 0.2,
      targetY: Math.random() * (1 - 0.2) + 0.2,
      calcX: Math.round(
        Math.abs(prev.targetX * ((deviceWidth * 80) / 100) - (e.clientX - 44))
      ),
      calcY: Math.round(
        Math.abs(
          prev.targetY * ((deviceHeight * 50) / 100) - (e.clientY - 44 - 96)
        )
      ),
    }));
    dispatch(pullTrigger({ x: coordinates.calcX, y: coordinates.calcY }));
  };

  return (
    <Presenter
      gameProgress={gameProgress}
      coordinates={coordinates}
      setGameProgress={setGameProgress}
      handleCoordinates={handleCoordinates}
    />
  );
}

export default Container;
