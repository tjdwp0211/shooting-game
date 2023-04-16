import React from "react";
import styled from "@emotion/styled";
import { Circle, Wrapper, Tooltip } from "./elements/";
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
  const { coordinates, gameProgress, handleCoordinates, setGameProgress } =
    props;
  const deviceSize = useSelector((state: Store) => state.deviceInfomation);

  const waitingForGameStart = (children: React.ReactNode) => {
    return !gameProgress.start ? (
      <CoordinatesFixer>{children}</CoordinatesFixer>
    ) : (
      <CoordinatesChanger {...coordinates} {...deviceSize}>
        <Tooltip />
        {children}
      </CoordinatesChanger>
    );
  };

  const handleTargetBoardClick = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!gameProgress.start && !gameProgress.checkScore) {
      setGameProgress(prev => ({ ...prev, start: !prev.start }));
    } else {
      handleCoordinates(e);
    }
  };

  return (
    <>
      {waitingForGameStart(
        <Wrapper handleTargetBoardClick={handleTargetBoardClick}>
          <Circle radius={100} background={white} />
          <Circle radius={85} background={lightBlack} />
          <Circle radius={60} background={blue} />
          <Circle radius={35} background={red} />
          <Circle radius={15} background={yellow} />
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
  targetX: number;
  targetY: number;
  deviceWidth: number;
  deviceHeight: number;
}>`
  transform: translateX(
      ${props => props.targetX * ((props.deviceWidth * 80) / 100)}px
    )
    translateY(${props => props.targetY * ((props.deviceHeight * 50) / 100)}px)
    scaleX(1) scaleY(1);
  position: relative;
`;

const CoordinatesFixer = styled(Root)`
  top: 55%;
  left: 50%;
  transform: translate(-50%, 0%);
`;
