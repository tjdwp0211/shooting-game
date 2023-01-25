import React from "react";
import styled from "@emotion/styled";
import { Circle, Line, Wrapper } from "./elements/";
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
    handleStackingHit,
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

  return (
    <>
      {waitingForGameStart(
        <Wrapper
          handleCoordinates={handleCoordinates}
          handleStackingHit={handleStackingHit}
        >
          <Circle radius={100} background={white}></Circle>
          <Circle radius={85} background={lightBlack}></Circle>
          <Circle radius={65} background={blue}></Circle>
          <Circle radius={40} background={red}></Circle>
          <Circle radius={20} background={yellow}></Circle>
          <Line rotation={true} />
          <Line rotation={false} />
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
    transform: translateX(${(props) => props.x * 1000}px)
      translateY(${(porps) => porps.y * 200}px) scaleX(1) scaleY(1);
  }
  @media (830px < width < 1100px) {
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

const CoordinatesFixer = styled(Root)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
