import React from "react";
import styled from "@emotion/styled";
import { black, white } from "../../../style/palette/palette";

function Footer() {
  return <Wrapper>Footer</Wrapper>;
}

export default Footer;

const Wrapper = styled.footer`
  width: 100vw;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 5vw;
  color: ${black};
  background-color: ${white};
`;
