import React from "react";
import styled from "@emotion/styled";
import { black, gray, white } from "../../style/palette/palette";
import { boldFont } from "../../style/fonts/inedx";

function Footer() {
  return <Container>Footer</Container>;
}

export default Footer;

const Container = styled.footer`
  width: 100vw;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 5vw;
  color: ${black};
  background-color: ${white};
  box-shadow: 0px 0px 12px 0px ${gray};
  position: absolute;
  font-size: 20px;
  ${boldFont}
`;
