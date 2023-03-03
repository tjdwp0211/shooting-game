import React, { useCallback } from "react";
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
import { useSelector } from "react-redux";
import { Store } from "../../redux/root";

function Presenter(props: PresenterProps) {
  const {
    targetCoordinates,
    gameProgress,
    handleCoordinates,
    handleStackingScore,
  } = props;
  const { deviceWidth, deviceHeight } = useSelector(
    (state: Store) => state.deviceSize
  );

  const waitingForGameStart = (children: React.ReactNode) => {
    return !gameProgress.start ? (
      <CoordinatesFixer>{children}</CoordinatesFixer>
    ) : (
      <CoordinatesChanger
        x={targetCoordinates.x}
        y={targetCoordinates.y}
        deviceHeight={deviceHeight}
        deviceWidth={deviceWidth}
      >
        {children}
      </CoordinatesChanger>
    );
  };

  const handleTargetBoardClick = useCallback(
    (e: React.MouseEvent) => {
      handleCoordinates();
      handleStackingScore(e);
    },
    [handleCoordinates, handleStackingScore]
  );

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
          <Circle {...circleProps("2", 100, white)} />
          <Circle {...circleProps("4", 90, lightBlack)} />
          <Circle {...circleProps("6", 65, blue)} />
          <Circle {...circleProps("8", 40, red)} />
          <Circle {...circleProps("10", 20, yellow)} />
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
