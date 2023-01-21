import styled from "@emotion/styled";
import React from "react";
import Box from "../box/Box";

function Presenter() {
  return (
    <Wrapper>
      <Box>Check Your Score</Box>
    </Wrapper>
  );
}

export default Presenter;

const Wrapper = styled.article`
  width: 80vw;
  height: 50vh;
`;
