import React from "react";
import styled from "@emotion/styled";
import { Layout, Box, TargetBoard } from "../components";

function Home() {
  return (
    <Layout indexPage>
      <Wrapper>
        <TargetBoard></TargetBoard>
      </Wrapper>
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
