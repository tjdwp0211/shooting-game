import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/root";
import { boldFont, regularFont } from "../../../style/fonts/inedx";
import Text from "../../text/Text";

function Time() {
  const { time } = useSelector((state: Store) => state.gameState);

  return (
    <TimeContainer>
      <Text size={32} weight={boldFont}>
        Time to clear : {time}
      </Text>
      <Text size={20} weight={regularFont}>
        s
      </Text>
    </TimeContainer>
  );
}

export default Time;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  p:nth-last-of-type(1) {
    padding: 8px 0px 0px 2px;
  }
`;
