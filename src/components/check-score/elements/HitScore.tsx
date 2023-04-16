import React from "react";
import styled from "@emotion/styled";
import Text from "../../text/Text";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/root";
import { boldFont, lightFont, regularFont } from "../../../style/fonts/inedx";
import { white, lightBlack } from "../../../style/palette/palette";
import { useSpitOutColor } from "../../../customhook";

function HitScore() {
  const stackingScore = useSelector(
    (state: Store) => state.gameState.stackingScore
  );
  const spitOutColor = useSpitOutColor;

  const checkShootingHistory = stackingScore.reduce(
    (prev, cur, i) => {
      prev = { ...prev, score: prev.score + cur };
      prev.history.push(
        <Block bgColor={spitOutColor(cur)} key={i}>
          <p>{cur}</p>
        </Block>
      );
      if (cur) return { ...prev, num: prev.num + 1 };
      else return { ...prev, num: prev.num };
    },
    { num: 0, history: [], score: 0 }
  );

  return (
    <Wrapper>
      <TextWrapper>
        <Text size={24} weight={regularFont}>
          Hits :
        </Text>
        <Text size={32} weight={boldFont}>
          {checkShootingHistory.num}
        </Text>
        <Text size={16} weight={lightFont}>
          / 30
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text size={24} weight={regularFont}>
          Score :
        </Text>
        <Text size={32} weight={boldFont}>
          {checkShootingHistory.score}
        </Text>
        <Text size={16} weight={lightFont}>
          / 300
        </Text>
      </TextWrapper>
      <HistoryBoard>{checkShootingHistory.history}</HistoryBoard>
    </Wrapper>
  );
}

export default HitScore;

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p:nth-of-type(1) {
    padding: 4px 0px 0px 0px;
  }
  p:nth-of-type(3) {
    padding: 8px 0px 0px 0px;
  }
`;

const HistoryBoard = styled.article`
  width: 20%;
  min-width: calc(34px * 10);
  height: 20vh;
  min-height: calc(24px * 3);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;
  background-color: #9b9b9b72;
`;

const Block = styled.div<{ bgColor: string }>`
  width: calc(10% - 2px);
  height: calc((100% / 3) - 2px);
  color: ${white};
  background-color: ${props => props.bgColor};
  font-size: 16px;
  ${boldFont}
  box-shadow: 0px 0px 4px 0px ${lightBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 4px;
`;
