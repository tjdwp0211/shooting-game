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
`;

const BoardWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  max-height: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0px 5vw;
  background-color: ${white};
  @media (orientation: landscape) {
    height: 105vh;
  }
`;
