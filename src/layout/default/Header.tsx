import React from "react";
import styled from "@emotion/styled";
import { boldFont } from "../../style/fonts/inedx";
import { black, white, gray } from "../../style/palette/palette";
import Link from "next/link";
import { Text } from "../../components";

function Header() {
  return (
    <HeaderContainer>
      <Link href={"/"} passHref legacyBehavior>
        <StyledLink className="text-button">
          <Text size={20} weight={boldFont}>
            Aiming Trainer
          </Text>
        </StyledLink>
      </Link>
      <Link href={"/board"} passHref legacyBehavior>
        <StyledLink className="text-button">
          <Text size={20} weight={boldFont}>
            DASHBOARD
          </Text>
        </StyledLink>
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
  z-index: 1;
  position: relative;
  box-shadow: 0px 0px 12px 0px ${gray};
  color: inherit;
  -webkit-text-fill-color: ${black};
  &,
  * {
    background-color: ${white};
  }
`;

const StyledLink = styled.a`
  color: ${black};
  padding: 4px 6px;
`;
