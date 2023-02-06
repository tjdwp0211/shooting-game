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
        <IndexWrapper>
          <div className="container">{children}</div>
        </IndexWrapper>
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
  min-height: calc(100vh - 100px);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .container {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 90vw;
    height: calc(100vh - 100px);
    position: relative;
  }
`;
