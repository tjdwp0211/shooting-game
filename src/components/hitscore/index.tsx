import React from "react";
import * as S from "./styled";
import Text from "../text/Text";
import { useSelector } from "react-redux";
import { Store } from "../../redux/root";
import { boldFont, lightFont, regularFont } from "../../style/fonts/inedx";
import { useSpitOutColor } from "../../customhook";

function HitScore() {
  const stackingScore = useSelector(
    (state: Store) => state.gameState.stackingScore
  );
  const spitOutColor = useSpitOutColor;

  const checkShootingHistory = stackingScore.reduce(
    (prev, cur, i) => {
      prev = { ...prev, score: prev.score + cur };
      prev.history.push(
        <S.Block bgColor={spitOutColor(cur)} key={i}>
          <p>{cur}</p>
        </S.Block>
      );
      if (cur) return { ...prev, num: prev.num + 1 };
      else return { ...prev, num: prev.num };
    },
    { num: 0, history: [], score: 0 }
  );

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <Text size={24} weight={regularFont}>
          Hits :
        </Text>
        <Text size={32} weight={boldFont}>
          {checkShootingHistory.num}
        </Text>
        <Text size={16} weight={lightFont}>
          / 30
        </Text>
      </S.TextWrapper>
      <S.TextWrapper>
        <Text size={24} weight={regularFont}>
          Score :
        </Text>
        <Text size={32} weight={boldFont}>
          {checkShootingHistory.score}
        </Text>
        <Text size={16} weight={lightFont}>
          / 300
        </Text>
      </S.TextWrapper>
      <S.HistoryBoard>{checkShootingHistory.history}</S.HistoryBoard>
    </S.Wrapper>
  );
}

export default HitScore;
