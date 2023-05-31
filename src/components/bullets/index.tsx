import React, { useEffect } from "react";
import Text from "../text/Text";
import * as S from "./styled";
import { useSelector } from "react-redux";
import { Store } from "../../redux/root";
import { BulletsProps } from "../../type/components/curGameStateType";
import { boldFont, regularFont } from "../../style/fonts/inedx";

function Bullets({ setGameProgress }: BulletsProps) {
  const remainBullets = useSelector(
    (state: Store) => state.gameState.remainBullets
  );

  useEffect(() => {
    if (remainBullets === 1)
      return () => {
        setGameProgress({ start: false, checkScore: true });
      };
  }, [remainBullets, setGameProgress]);

  return (
    <S.Container>
      <S.RemainWrapper>
        <Text size={32} weight={boldFont}>
          {remainBullets}
        </Text>
        <Text size={12} weight={regularFont}>
          / 30
        </Text>
      </S.RemainWrapper>
      <S.ImgsWrapper>
        {Array.from({ length: remainBullets }).map((_, i) => (
          <S.Img key={i} />
        ))}
      </S.ImgsWrapper>
    </S.Container>
  );
}

export default Bullets;
