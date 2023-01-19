import React from "react";
import styled from "@emotion/styled";
import BulletImgs from "./BulletImgs";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/root";

function Bullets() {
  const { remainBullets } = useSelector((state: RootStore) => state.gameState);

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
