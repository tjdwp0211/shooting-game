import React, { useState } from "react";
import styled from "@emotion/styled";
import { Layout, Box, TargetBoard, CurGameState } from "../components";

function Home() {
  const [gameStart, setGameStart] = useState(false);
  const handleGameStart = () => setGameStart((prev) => !prev);

  return (
    <Layout indexPage>
      <Wrapper>
        <TargetBoard gameStart={gameStart} handleGameStart={handleGameStart} />
      </Wrapper>
      <CurGameState gameStart={gameStart} />
      <BoxWrapper>
        <Box></Box>
      </BoxWrapper>
    </Layout>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: 600px;
`;
