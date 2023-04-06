import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Circle, Wrapper } from "./elements/";
import { PresenterProps } from "../../type/components/targetBoardType";
import {
  white,
  lightBlack,
  blue,
  red,
  yellow,
} from "../../style/palette/palette";
import { useSelector } from "react-redux";
import { Store } from "../../redux/root";

function Presenter(props: PresenterProps) {
  const { coordinates, gameProgress, handleCoordinates, handleStackingScore } =
    props;
  const { deviceWidth, deviceHeight } = useSelector(
    (state: Store) => state.deviceSize
  );

  const waitingForGameStart = (children: React.ReactNode) => {
    return !gameProgress.start ? (
      <CoordinatesFixer>{children}</CoordinatesFixer>
    ) : (
      <CoordinatesChanger
        x={coordinates.targetX}
        y={coordinates.targetY}
        deviceHeight={deviceHeight}
        deviceWidth={deviceWidth}
      >
        {children}
      </CoordinatesChanger>
    );
  };

  const handleTargetBoardClick = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      handleCoordinates(e);
      handleStackingScore(e as React.MouseEvent);
    },
    [handleCoordinates, handleStackingScore]
  );

  return (
    <>
      {waitingForGameStart(
        <Wrapper handleTargetBoardClick={handleTargetBoardClick}>
          <Circle point={"2"} radius={100} background={white} />
          <Circle point={"4"} radius={85} background={lightBlack} />
          <Circle point={"6"} radius={60} background={blue} />
          <Circle point={"8"} radius={35} background={red} />
          <Circle point={"10"} radius={15} background={yellow} />
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
  deviceWidth: number;
  deviceHeight: number;
}>`
  transform: translateX(
      ${props => props.x * ((props.deviceWidth * 80) / 100)}px
    )
    translateY(${props => props.y * ((props.deviceHeight * 50) / 100)}px)
    scaleX(1) scaleY(1);
`;

const CoordinatesFixer = styled(Root)`
  top: 55%;
  left: 50%;
  transform: translate(-50%, 0%);
`;
