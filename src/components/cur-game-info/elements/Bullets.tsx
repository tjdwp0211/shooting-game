import React from "react";
import styled from "@emotion/styled";
import { boldFont } from "../../../style/fonts/inedx";

function Bullets() {
  return <Container>Bullet: {30}</Container>;
}

export default Bullets;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 30px;
  ${boldFont}
`;
