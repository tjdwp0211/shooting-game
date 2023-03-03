import React from "react";
import styled from "@emotion/styled";
import { white } from "../../style/palette/palette";

interface MainProps {
  children: React.ReactNode;
  indexPage: boolean;
}

function Main({ children, indexPage }: MainProps) {
  return (
    <>
      {indexPage ? (
        <IndexWrapper>{children}</IndexWrapper>
      ) : (
        <BoardWrapper>{children}</BoardWrapper>
      )}
    </>
  );
}

export default Main;

const IndexWrapper = styled.main`
  width: 100vw;
  height: calc(100vh - 48px);
  overflow: hidden;
`;

const BoardWrapper = styled.main`
  width: 100%;
  height: 1024px;
  min-height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0px 5vw;
  background-color: ${white};
  overflow-x: hidden;
  @media (orientation: landscape) {
    @media (width < 1024px) {
      justify-content: baseline;
      height: 140vh;
    }
  }
`;
