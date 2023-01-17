import React from "react";
import styled from "@emotion/styled";
import { boldFont } from "../../../style/fonts/inedx";
import { black, white, gray } from "../../../style/palette/palette";
import Link from "next/link";

function Header() {
  return (
    <HeaderContainer>
      <TextButton className="text-button">What About Your Click</TextButton>
      <Link href={"/board"}>
        <TextButton className="text-button">BOARD</TextButton>
      </Link>
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
  box-shadow: 0px 0px 12px 0px ${gray};
  &,
  * {
    background-color: ${white};
  }
`;

const TextButton = styled.button`
  border: none;
  font-size: 20px;
  padding: 4px 6px;
  ${boldFont}
`;
