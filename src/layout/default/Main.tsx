import React from "react";
import styled from "@emotion/styled";

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
        <Wrapper>
          <div className="container">{children}</div>
        </Wrapper>
      )}
    </>
  );
}

export default Main;

const IndexWrapper = styled.main`
  width: 100vw;
  height: calc(100vh - 48px);
`;

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 90vw;
    height: calc(100vh - 48px);
    position: relative;
  }
`;
