import React from "react";
import styled from "@emotion/styled";
import { Circle, Line, Wrapper } from "./elements/";
import { PresenterProps } from "../../type/targetBoardType";

function Presenter(props: PresenterProps) {
  const { targetInfo, gameStart, handleHit, handleGameStart } = props;

  const waitingForGameStart = (children: React.ReactNode) => {
    return !gameStart ? (
      <CoordinatesFixer onClick={handleGameStart}>{children}</CoordinatesFixer>
    ) : (
      <CoordinatesChanger x={targetInfo.x} y={targetInfo.y}>
        {children}
      </CoordinatesChanger>
    );
  };

  return (
    <>
      {waitingForGameStart(
        <Wrapper handleHit={handleHit}>
          <Circle radius={100}></Circle>
          <Circle radius={70}></Circle>
          <Circle radius={40}></Circle>
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
`;

const CoordinatesChanger = styled(Root)<{
  x: number;
  y: number;
}>`
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

const CoordinatesFixer = styled(Root)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
