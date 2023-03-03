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
  column-gap: 12px;
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
  & > article,
  canvas {
    justify-self: center;
    align-items: center;
    width: 80%;
    min-width: 204px;
    height: 80%;
    min-height: 204px;
  }

  @media only screen and (orientation: landscape),
    only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 2fr);
    grid-template-areas:
      "timeChart filter"
      "hitChart scoreChart";
    & > article,
    canvas {
      max-width: 420px;
      max-height: 420px;
    }
    article:nth-of-type(1),
    article:nth-of-type(4) {
      justify-self: start;
    }
    article:nth-of-type(2),
    article:nth-of-type(3) {
      justify-self: end;
    }
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "filter"
      "timeChart"
      "hitChart"
      "scoreChart";
    article:nth-of-type(1),
    article:nth-of-type(4),
    article:nth-of-type(2),
    article:nth-of-type(3) {
      justify-self: center;
    }
    & > * {
      max-width: 192px;
      max-height: 192px;
    }
  }
`;
