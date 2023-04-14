import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/root";
import {
  blue,
  lightBlack,
  red,
  white,
  yellow,
} from "../../../style/palette/palette";
import { boldFont, regularFont } from "../../../style/fonts/inedx";
import Text from "../../text/Text";

function Tooltip() {
  const { scoreArray, remainBullet } = useSelector((state: Store) => ({
    scoreArray: state.gameState.stackingScore,
    remainBullet: state.gameState.remainBullets,
  }));

  const returnColorByPoint = useCallback((point: number) => {
    if (point === 0) return white + "bf";
    if (point === 2) return white + "bf";
    if (point === 4) return lightBlack + "bf";
    if (point === 6) return blue + "bf";
    if (point === 8) return red + "bf";
    if (point === 10) return yellow + "bf";
  }, []);

  return (
    <Container
      remainBullet={remainBullet}
      colorPicker={() => returnColorByPoint(scoreArray.at(-1))}
    >
      <Text size={16} weight={boldFont}>
        {scoreArray.at(-1)}
      </Text>
      {remainBullet !== 30 && (
        <Text size={12} weight={regularFont}>
          Point
        </Text>
      )}
    </Container>
  );
}

export default Tooltip;

const Container = styled.div<{
  remainBullet: number;
  colorPicker: () => string;
}>`
  position: absolute;
  top: -16px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: default;
  color: ${props => props.colorPicker()};
`;
