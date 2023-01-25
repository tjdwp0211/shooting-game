import React from "react";
import styled from "@emotion/styled";
import Overlay from "../overlay/Overlay";
import { lightBlack } from "../../style/palette/palette";

function Presenter() {
  return (
    <>
      <Overlay />
      <Wrapper>
        <Container></Container>
      </Wrapper>
    </>
  );
}

export default Presenter;

const Wrapper = styled.article`
  width: 70vw;
  height: 70vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  z-index: 1;
  box-shadow: 0px 0px 12px 0px ${lightBlack};
  @media (max-width: 768px) {
    width: 80vw;
    height: 60vh;
    transform: translate(-50%, -45%);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
`;
