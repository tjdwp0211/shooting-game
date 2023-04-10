import React from "react";
import styled from "@emotion/styled";
import { Timer, Bullets } from "./elements";
import { boldFont } from "../../style/fonts/inedx";
import { CurGameStateProps } from "../../type/components/curGameStateType";

function CurGameState({ gameProgress, setGameProgress }: CurGameStateProps) {
  return (
    <Wrapper>
      <Timer gameProgress={gameProgress} />
      <Bullets setGameProgress={setGameProgress} />
    </Wrapper>
  );
}

export default CurGameState;

const Wrapper = styled.div`
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 2px 16px;
  cursor: default;
  ${boldFont}
  @media (width > 1340px) {
    justify-content: space-around;
  }
`;
