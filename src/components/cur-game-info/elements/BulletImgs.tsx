import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/root";
import { gray } from "../../../style/palette/palette";

function BulletImgs() {
  const { remainBullets } = useSelector((state: RootStore) => state.gameState);

  const createImgs = () => {
    return Array.from({ length: remainBullets }).map((_, i) => <Img key={i} />);
  };

  return <ImgsWrapper>{createImgs()}</ImgsWrapper>;
}

export default BulletImgs;

const ImgsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Img = styled.div`
  width: 0.5vw;
  max-width: 16px;
  min-width: 4px;
  height: 0.7vw;
  max-height: 24px;
  min-height: 8px;
  background-color: #f3bc5b;
  border-radius: 100% 100% 0px 0px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    background-color: #fda000;
    border-radius: 100% 100% 0px 0px;
    border-bottom: 1px solid ${gray};
    top: 0px;
    left: 0;
  }
`;
