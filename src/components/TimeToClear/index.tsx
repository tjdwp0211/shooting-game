import React from "react";
import * as S from "./styled";
import Text from "../text/Text";
import { useSelector } from "react-redux";
import { Store } from "../../redux/root";
import { boldFont, lightFont, regularFont } from "../../style/fonts/inedx";

function TimeToClear() {
  const { timeToClear: sec } = useSelector((state: Store) => state.gameState);

  return (
    <S.TimeContainer>
      <Text size={20} weight={regularFont}>
        Time to clear :
      </Text>
      <Text size={32} weight={boldFont}>
        {sec}
      </Text>
      <Text size={20} weight={lightFont}>
        s
      </Text>
    </S.TimeContainer>
  );
}

export default TimeToClear;
