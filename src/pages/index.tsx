import React, { useState } from "react";
import styled from "@emotion/styled";
import { boldFont, regularFont } from "../style/fonts/inedx";
import { TargetBoard, CurGameState, Layout, Box, Text } from "../components";
import { useDispatch } from "react-redux";
import { pullTrigger } from "../redux/root";

function Home() {
  const dispatch = useDispatch();
  const [gameStart, setGameStart] = useState(false);

  const handleStackingHit = (hit: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!gameStart) setGameStart((prev) => !prev);
    else dispatch(pullTrigger(hit));
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
      <Wrapper onClick={(e) => handleStackingHit(false, e)}>
        {!gameStart && containTexts()}
        <TargetBoard
          gameStart={gameStart}
          handleStackingHit={handleStackingHit}
        />
      </Wrapper>
      <CurGameState gameStart={gameStart} setGameStart={setGameStart} />
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
