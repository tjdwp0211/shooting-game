import React from "react";
import styled from "@emotion/styled";
import { Timer, Bullets } from "./elements";
import { CurGameStateProps } from "../../type/curGameStateType";
import { boldFont } from "../../style/fonts/inedx";

function CurGameState({ gameStart }: CurGameStateProps) {
  return (
    <Wrapper>
      <Timer gameStart={gameStart} />
      <Bullets />
    </Wrapper>
  );
}

export default CurGameState;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 16px;
  cursor: default;
  ${boldFont}
`;
