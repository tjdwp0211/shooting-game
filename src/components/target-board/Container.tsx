import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import Presenter from "./Presenter";

interface TargetInfo {
  clicked: boolean;
  x: number;
  y: number;
}

function Container() {
  const [targetInfo, setTargetInfo] = useState<TargetInfo>({
    x: Math.random() * 1000,
    y: Math.random() * 200,
    clicked: false,
  });

  const randomCoordinates = useCallback(
    () => ({
      x: Math.random() * 1000,
      y: Math.random() * 200,
    }),
    []
  );
  const handleClicked = () => {
    setTargetInfo((prev) => ({
      ...prev,
      clicked: !prev.clicked,
      ...randomCoordinates(),
    }));
  };

  return (
    <Changer x={targetInfo.x} y={targetInfo.y} clicked={targetInfo.clicked}>
      <Presenter handleClicked={handleClicked} />
    </Changer>
  );
}

export default Container;

const Changer = styled.div<{
  x: number;
  y: number;
  clicked: boolean;
}>`
  width: fit-content;
  height: fit-content;
  transform: matrix3d(
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    ${(props) => props.x},
    ${(props) => props.y},
    0,
    1
  );
`;
