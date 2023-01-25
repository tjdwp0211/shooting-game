import React, { useState } from "react";
import styled from "@emotion/styled";
import { boldFont, regularFont } from "../style/fonts/inedx";
import { TargetBoard, CurGameState, Layout, Box, Text } from "../components";
import { useDispatch } from "react-redux";
import { pullTrigger } from "../redux/root";
import Container from "../components/check-score/Container";
import { GameProgress } from "../type/pages/indexType";

function Home() {
  const dispatch = useDispatch();
  const [gameProgress, setGameProgress] = useState<GameProgress>({
    start: false,
    checkScore: false,
  });

  const handleStackingHit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!gameProgress.start)
      setGameProgress((prev) => ({ ...prev, start: !prev.start }));
    else dispatch(pullTrigger(e.currentTarget.id === "hit"));
  };

  const containTexts = () => {
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
  };

  return (
    <Layout indexPage>
      {gameProgress.checkScore && (
        <Container setGameProgress={setGameProgress} />
      )}
      <ResponsiveWrapper>
        <Wrapper onClick={handleStackingHit}>
          {!gameProgress.start && containTexts()}
          <TargetBoard
            gameProgress={gameProgress}
            handleStackingHit={handleStackingHit}
          />
        </Wrapper>
        <CurGameState
          gameProgress={gameProgress}
          setGameProgress={setGameProgress}
        />
      </ResponsiveWrapper>
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
  height: 500px;
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

const ResponsiveWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
