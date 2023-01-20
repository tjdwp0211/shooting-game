import React, { useEffect } from "react";
import styled from "@emotion/styled";
import BulletImgs from "./BulletImgs";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, reloadbullets } from "../../../redux/root";
import { BulletsProps } from "../../../type/curGameStateType";

function Bullets({ setGameProgress }: BulletsProps) {
  const dispatch = useDispatch();
  const { remainBullets } = useSelector((state: RootStore) => state.gameState);

  useEffect(() => {
    if (remainBullets === 1)
      return () => {
        dispatch(reloadbullets());
        setGameProgress({ start: false, checkScore: true });
      };
  }, [remainBullets]);

  return (
    <Container>
      Remain: {remainBullets}
      <BulletImgs />
    </Container>
  );
}

export default Bullets;

const Container = styled.article`
  height: fit-content;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
