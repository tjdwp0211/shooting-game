import React from "react";
import styled from "@emotion/styled";
import { Timer, Bullets } from "./elements";
import { CurGameStateProps } from "../../type/components/curGameStateType";
import { boldFont } from "../../style/fonts/inedx";

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
  justify-content: space-between;
  padding: 2px 16px;
  cursor: default;
  ${boldFont}
`;
