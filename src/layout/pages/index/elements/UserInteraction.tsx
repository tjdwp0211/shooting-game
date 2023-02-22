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

function UserInteraction(props: UserInteractionProps) {
  const { gameProgress, setGameProgress, handleStackingScore } = props;
  const { start, checkScore } = gameProgress;
  const containTexts = useMemo(() => {
    return (
      <TextsWrapper>
        <Text size={40} weight={boldFont}>
          Accurate Aim, Fast Hit
        </Text>
        <Text size={20} weight={regularFont}>
          Click the target to game start
        </Text>
      </TextsWrapper>
    );
  }, []);

  return (
    <>
      <CurGameState
        gameProgress={gameProgress}
        setGameProgress={setGameProgress}
      />
      <Wrapper onMouseDown={handleStackingScore} id="0">
        {!start && !checkScore && containTexts}
        {checkScore ? (
          <CheckScore setGameProgress={setGameProgress} />
        ) : (
          <TargetBoard
            gameProgress={gameProgress}
            handleStackingScore={handleStackingScore}
          />
        )}
      </Wrapper>
    </>
  );
}

export default UserInteraction;

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
