import React from "react";
import styled from "@emotion/styled";
import { lightBlack } from "../../style/palette/palette";

function Overlay() {
  return <Container />;
}

export default Overlay;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${lightBlack};
  opacity: 0.7;
  z-index: 1;
`;
