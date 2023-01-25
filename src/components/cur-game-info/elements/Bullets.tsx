import React, { useEffect } from "react";
import styled from "@emotion/styled";
import BulletImgs from "./BulletImgs";
import Text from "../../text/Text";
import { useSelector } from "react-redux";
import { Store } from "../../../redux/root";
import { BulletsProps } from "../../../type/components/curGameStateType";
import { boldFont, regularFont } from "../../../style/fonts/inedx";

function Bullets({ setGameProgress }: BulletsProps) {
  const { remainBullets } = useSelector((state: Store) => state.gameState);

  useEffect(() => {
    if (remainBullets === 1)
      return () => {
        setGameProgress({ start: false, checkScore: true });
      };
  }, [remainBullets]);

  return (
    <Container>
      <RemainWrapper>
        <Text size={32} weight={boldFont}>
          {remainBullets}
        </Text>
        <Text size={12} weight={regularFont}>
          / 30
        </Text>
      </RemainWrapper>
      <BulletImgs />
    </Container>
  );
}

export default Bullets;

const Container = styled.article`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RemainWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  p:nth-of-type(2) {
    padding: 16% 0px 0px 0px;
  }
`;
