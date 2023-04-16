import React from "react";
import styled from "@emotion/styled";
import Text from "../../text/Text";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/root";
import { boldFont, regularFont } from "../../../style/fonts/inedx";
import { useSpitOutColor } from "../../../customhook";

function Tooltip() {
  const { scoreArray, remainBullet } = useSelector((state: Store) => ({
    scoreArray: state.gameState.stackingScore,
    remainBullet: state.gameState.remainBullets,
  }));
  const spitOutColor = useSpitOutColor;

  return (
    <Container
      remainBullet={remainBullet}
      colorPicker={() => spitOutColor(scoreArray.at(-1))}
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
