import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { boldFont, regularFont } from "../style/fonts/inedx";
import { useDispatch } from "react-redux";
import { pullTrigger } from "../redux/root";
import { GameProgress } from "../type/pages/indexType";
import {
  TargetBoard,
  CurGameState,
  CheckScore,
  Layout,
  Box,
  Text,
} from "../components";

function Home() {
  const dispatch = useDispatch();
  const [gameProgress, setGameProgress] = useState<GameProgress>({
    start: false,
    checkScore: false,
  });
  const { start, checkScore } = gameProgress;

  const handleStackingHit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!start) setGameProgress((prev) => ({ ...prev, start: !prev.start }));
    else dispatch(pullTrigger(e.currentTarget.id === "hit"));
  };

  const containTexts = useMemo(
    () => (
      <TextsWrapper>
        <Text size={40} weight={boldFont}>
          Accurate Aim, Fast Hit
        </Text>
        <Text size={20} weight={regularFont}>
          Click the target to game start
        </Text>
      </TextsWrapper>
    ),
    []
  );

  return (
    <Layout indexPage>
      <CurGameState
        gameProgress={gameProgress}
        setGameProgress={setGameProgress}
      />
      <Wrapper onClick={handleStackingHit} id="1">
        {!start && !checkScore && containTexts}
        {checkScore ? (
          <CheckScore setGameProgress={setGameProgress} />
        ) : (
          <TargetBoard
            gameProgress={gameProgress}
            handleStackingHit={handleStackingHit}
          />
        )}
      </Wrapper>
      <BoxWrapper>
        <Box>
          <></>
        </Box>
      </BoxWrapper>
    </Layout>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  max-height: 500px;
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

const BoxWrapper = styled.div`
  width: 100%;
  height: 600px;
`;
