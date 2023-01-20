import React, { Dispatch, useEffect } from "react";
import styled from "@emotion/styled";
import BulletImgs from "./BulletImgs";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, reloadbullets } from "../../../redux/root";

interface BulletsProps {
  setGameStart: Dispatch<React.SetStateAction<boolean>>;
}

function Bullets({ setGameStart }: BulletsProps) {
  const dispatch = useDispatch();
  const { remainBullets } = useSelector((state: RootStore) => state.gameState);

  useEffect(() => {
    if (remainBullets === 1)
      return () => {
        dispatch(reloadbullets());
        setGameStart(false);
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
  width: fit-content;
  height: fit-content;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
