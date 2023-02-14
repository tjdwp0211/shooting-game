import React from "react";
import styled from "@emotion/styled";
import { Circle, Wrapper } from "./elements/";
import { PresenterProps } from "../../type/components/targetBoardType";
import {
  blue,
  lightBlack,
  red,
  white,
  yellow,
} from "../../style/palette/palette";

function Presenter(props: PresenterProps) {
  const {
    targetCoordinates,
    gameProgress,
    handleCoordinates,
    handleStackingScore,
  } = props;

  const waitingForGameStart = (children: React.ReactNode) => {
    return !gameProgress.start ? (
      <CoordinatesFixer>{children}</CoordinatesFixer>
    ) : (
      <CoordinatesChanger x={targetCoordinates.x} y={targetCoordinates.y}>
        {children}
      </CoordinatesChanger>
    );
  };

  const handleTargetBoardClick = (e: React.MouseEvent) => {
    handleCoordinates();
    handleStackingScore(e);
  };

  const circleProps = (point: string, radius: number, color: string) => {
    return {
      handleCircleClick: handleTargetBoardClick,
      point: point,
      radius: radius,
      background: color,
    };
  };

  return (
    <>
      {waitingForGameStart(
        <Wrapper>
          <Circle {...circleProps("1", 100, white)} />
          <Circle {...circleProps("2", 90, lightBlack)} />
          <Circle {...circleProps("3", 65, blue)} />
          <Circle {...circleProps("4", 40, red)} />
          <Circle {...circleProps("5", 20, yellow)} />
        </Wrapper>
      )}
    </>
  );
}

export default Presenter;

const Root = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  *:not(hr) {
    border-radius: 50%;
  }
`;

const CoordinatesChanger = styled(Root)<{
  x: number;
  y: number;
}>`
  @media (width > 1100px) {
    transform: translateX(${props => props.x * 1000}px)
      translateY(${porps => porps.y * 200}px) scaleX(1) scaleY(1);
  }
  @media (830px < width < 1100px) {
    transform: translateX(${props => props.x * 700}px)
      translateY(${porps => porps.y * 200}px) scaleX(1) scaleY(1);
  }
  @media (500px < width < 830px) {
    transform: translateX(${props => props.x * 500}px)
      translateY(${porps => porps.y * 200}px) scaleX(1) scaleY(1);
  }
  @media (width < 500px) {
    transform: translateX(${props => props.x * 300}px)
      translateY(${porps => porps.y * 200}px) scaleX(1) scaleY(1);
  }
`;

const CoordinatesFixer = styled(Root)`
  top: 55%;
  left: 50%;
  transform: translate(-50%, -10%);
`;
