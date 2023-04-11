import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";
import { useDispatch, useSelector } from "react-redux";
import { Store, pullTrigger } from "../../redux/root";
import {
  ContainerProps,
  Coordinates,
} from "../../type/components/targetBoardType";

function Container({ gameProgress, setGameProgress }: ContainerProps) {
  const dispatch = useDispatch();
  const { deviceWidth, deviceHeight, isMobile } = useSelector(
    (state: Store) => state.deviceInfomation
  );
  const [coordinates, setTargetCoordinates] = useState<Coordinates>({
    targetX: Math.random(),
    targetY: Math.random(),
    distanceDotToDot: 0,
  });

  const calculateDotToDot = (dot1: number, dot2: number) => {
    return Math.pow(Math.abs(dot1 / 100 - (dot2 - 44)), 2);
  };

  const handleCoordinates = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    setTargetCoordinates(prev => {
      const calcX = calculateDotToDot(
        prev.targetX * (deviceWidth * 80),
        isMobile
          ? (e as React.TouchEvent).touches[0].clientX
          : (e as React.MouseEvent).clientX
      );
      const calcY = calculateDotToDot(
        prev.targetY * (deviceHeight * 50),
        isMobile
          ? (e as React.TouchEvent).touches[0].clientX - 96
          : (e as React.MouseEvent).clientY - 96
      );
      const calcResult = Math.sqrt(calcX + calcY);

      return {
        ...prev,
        targetX: Math.random() * (1 - 0.2) + 0.2,
        targetY: Math.random() * (1 - 0.2) + 0.2,
        distanceDotToDot: calcResult,
      };
    });
  };

  useEffect(() => {
    if (gameProgress.start)
      dispatch(pullTrigger({ distanceDotToDot: coordinates.distanceDotToDot }));
  }, [coordinates.distanceDotToDot]);

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
