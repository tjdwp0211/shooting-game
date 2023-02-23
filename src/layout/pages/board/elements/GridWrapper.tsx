import React from "react";
import styled from "@emotion/styled";

interface GridWrapperProps {
  children: React.ReactNode;
}

function GridWrapper({ children }: GridWrapperProps) {
  return <GridContainer>{children}</GridContainer>;
}

export default GridWrapper;

const GridContainer = styled.article`
  width: 100%;
  height: 90%;
  padding-bottom: 24px;
  display: grid;
  grid-template-areas:
    "timeChart filter"
    "hitChart scoreChart";
  grid-template-columns: repeat(2, 50%);
  article:nth-of-type(1) {
    grid-area: filter;
  }
  article:nth-of-type(2) {
    grid-area: timeChart;
  }
  article:nth-of-type(3) {
    grid-area: hitChart;
  }
  article:nth-of-type(4) {
    grid-area: scoreChart;
  }
  & > article {
    justify-self: center;
    align-items: center;
    width: 100%;
    min-width: 204px;
    height: 100%;
    min-height: 204px;
  }

  @media (orientation: landscape) or (max-width: 1024px) {
    grid-template-columns: repeat(2, 2fr);
    grid-template-areas:
      "timeChart filter"
      "hitChart scoreChart";
    & > article {
      max-width: 560px;
      max-height: 560px;
    }
    article:nth-of-type(1) {
      justify-self: start;
    }
    article:nth-of-type(2) {
      justify-self: end;
    }
    article:nth-of-type(3) {
      justify-self: end;
    }
    article:nth-of-type(4) {
      justify-self: start;
    }
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "filter"
      "timeChart"
      "hitChart"
      "scoreChart";
    & > * {
      max-width: 192px;
      max-height: 192px;
    }
  }
`;
