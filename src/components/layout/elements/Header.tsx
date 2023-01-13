import React from "react";
import styled from "@emotion/styled";
import { boldFont } from "../../../style/fonts/inedx";
import { black, white } from "../../../style/palette/palette";

function Header() {
  return (
    <HeaderContainer>
      <TextButton>What About Your Click</TextButton>
      <TextButton>BOARD</TextButton>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100vw;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5vw;
  color: ${black};
  &,
  * {
    background-color: ${white};
  }
`;

const TextButton = styled.button`
  border: none;
  font-size: 20px;
  ${boldFont}
`;
