import React, { useMemo } from "react";
import styled from "@emotion/styled";
import {
  CheckScore,
  CurGameState,
  TargetBoard,
  Text,
} from "../../../../components";
import { boldFont, regularFont } from "../../../../style/fonts/inedx";
import { UserInteractionProps } from "../../../../type/pages/indexType";
import { green } from "../../../../style/palette/palette";
import { useDispatch, useSelector } from "react-redux";
import { Store, pullTrigger } from "../../../../redux/root";

function UserInteraction(props: UserInteractionProps) {
  const dispatch = useDispatch();
  const { gameProgress, setGameProgress } = props;
  const { start, checkScore } = gameProgress;
  const { isMobile } = useSelector((state: Store) => state.deviceInfomation);

  const zeroPointDispatcher = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    gameProgress.start && dispatch(pullTrigger({ distanceDotToDot: null }));
  };
  const eventHandlerProperty = () => {
    return isMobile
      ? { onTouchStart: zeroPointDispatcher }
      : { onMouseDown: zeroPointDispatcher };
  };

  return (
    <GreenBoard>
      <CurGameState
        gameProgress={gameProgress}
        setGameProgress={setGameProgress}
      />
      <Wrapper {...eventHandlerProperty()}>
        {!start && !checkScore && (
          <TextsWrapper>
            <Text size={40} weight={boldFont}>
              Accurate Aim, Fast Hit
            </Text>
            <Text size={20} weight={regularFont}>
              Click the target to game start
            </Text>
          </TextsWrapper>
        )}
        {checkScore ? (
          <CheckScore setGameProgress={setGameProgress} />
        ) : (
          <TargetBoard
            gameProgress={gameProgress}
            setGameProgress={setGameProgress}
          />
        )}
      </Wrapper>
    </GreenBoard>
  );
}

export default UserInteraction;

const GreenBoard = styled.div`
  background-color: ${green};
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(80vh - 48px);
  min-height: 300px;
  position: relative;
`;

const TextsWrapper = styled.div`
  text-align: center;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  p {
    margin: 0px;
  }
`;
