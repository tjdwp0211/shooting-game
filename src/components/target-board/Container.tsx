import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import Presenter from "./Presenter";

interface TargetInfo {
  x: number;
  y: number;
  hit: boolean;
}

function Container() {
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

  return (
    <Changer x={targetInfo.x} y={targetInfo.y}>
      <Presenter handleHit={handleHit} />
    </Changer>
  );
}

export default Container;

const Changer = styled.div<{
  x: number;
  y: number;
}>`
  width: fit-content;
  height: fit-content;
  position: absolute;
  @media (width > 1020px) {
    transform: translateX(${(props) => props.x * 1000}px)
      translateY(${(porps) => porps.y * 200}px) scaleX(1) scaleY(1);
  }
  @media (830px < width < 1020px) {
    transform: translateX(${(props) => props.x * 700}px)
      translateY(${(porps) => porps.y * 200}px) scaleX(1) scaleY(1);
  }
  @media (500px < width < 830px) {
    transform: translateX(${(props) => props.x * 500}px)
      translateY(${(porps) => porps.y * 200}px) scaleX(1) scaleY(1);
  }
  @media (width < 500px) {
    transform: translateX(${(props) => props.x * 300}px)
      translateY(${(porps) => porps.y * 200}px) scaleX(1) scaleY(1);
  }
`;
