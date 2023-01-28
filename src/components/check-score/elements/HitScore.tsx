import React from "react";
import styled from "@emotion/styled";
import Text from "../../text/Text";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/root";
import { boldFont, regularFont } from "../../../style/fonts/inedx";
import { white, lightBlue, lightBlack } from "../../../style/palette/palette";

function HitScore() {
  const { stackingHit } = useSelector((state: Store) => state.gameState);

  const checkShootingHistory = stackingHit.reduce(
    (prev, cur, i) => {
      prev.history.push(
        <Block hit={cur} key={i}>
          {i + 1}
        </Block>
      );
      if (cur) return { ...prev, num: prev.num + 1 };
      else return { ...prev, num: prev.num };
    },
    { num: 0, history: [] }
  );

  return (
    <Wrapper>
      <TextWrapper>
        <Text size={32} weight={boldFont}>
          Hits : {checkShootingHistory.num}
        </Text>
        <Text size={16} weight={regularFont}>
          / 30
        </Text>
      </TextWrapper>
      <HistoryBoard>{checkShootingHistory.history}</HistoryBoard>
    </Wrapper>
  );
}

export default HitScore;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p:nth-last-of-type(1) {
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

const Block = styled.div<{ hit: boolean }>`
  width: calc(10% - 2px);
  height: calc((100% / 3) - 2px);
  color: ${white};
  background-color: ${(props) => (props.hit ? lightBlue : "inherit")};
  font-size: 12px;
  box-shadow: 0px 0px 4px 0px ${lightBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 4px;
`;
