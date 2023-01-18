import React, { useState } from "react";
import styled from "@emotion/styled";
import { boldFont, regularFont } from "../style/fonts/inedx";
import { TargetBoard, CurGameState, Layout, Box, Text } from "../components";

function Home() {
  const [gameStart, setGameStart] = useState(false);
  const handleGameStart = () => setGameStart((prev) => !prev);

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
      <Wrapper>
        {!gameStart && containTexts()}
        <TargetBoard gameStart={gameStart} handleGameStart={handleGameStart} />
      </Wrapper>
      <CurGameState gameStart={gameStart} />
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
