import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/root";
import { boldFont, lightFont, regularFont } from "../../../style/fonts/inedx";
import Text from "../../text/Text";

function Time() {
  const { timeToClear } = useSelector((state: Store) => state.gameState);

  return (
    <TimeContainer>
      <Text size={20} weight={regularFont}>
        Time to clear :
      </Text>
      <Text size={32} weight={boldFont}>
        {timeToClear}
      </Text>
      <Text size={20} weight={lightFont}>
        s
      </Text>
    </TimeContainer>
  );
}

export default Time;

const TimeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;

  p:nth-of-type(1) {
    padding: 0px 4px 4px 0px;
  }
  p:nth-of-type(3) {
    padding: 0px 0px 2px 4px;
  }
`;
