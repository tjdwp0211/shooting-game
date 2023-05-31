import React from "react";
import Timer from "../timer";
import Bullets from "../bullets";
import * as S from "./styled";
import { CurGameStateProps } from "../../type/components/curGameStateType";

function CurGameState({ gameProgress, setGameProgress }: CurGameStateProps) {
  return (
    <S.Wrapper>
      <Timer gameProgress={gameProgress} />
      <Bullets setGameProgress={setGameProgress} />
    </S.Wrapper>
  );
}

export default CurGameState;
