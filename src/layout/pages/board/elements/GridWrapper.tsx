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
    background-color: white;
    border-radius: 6px;
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
  article,
  canvas {
    justify-self: center;
    align-items: center;
    width: 100%;
    min-width: 204px;
    height: 100%;
    min-height: 204px;
  }
  gap: 12px;
  @media only screen and (orientation: landscape),
    only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 2fr);
    grid-template-areas:
      "timeChart filter"
      "hitChart scoreChart";
    article {
      max-width: 432px;
      max-height: 432px;
    }
    canvas {
      max-width: 420px;
      max-height: 420px;
    }
    article:nth-of-type(1),
    article:nth-of-type(2) {
      align-self: end;
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
    article:nth-of-type(1) {
      background-color: inherit;
    }
    article:not(article:nth-of-type(1)) {
      max-width: 212px;
      max-height: 212px;
    }
    canvas {
      max-width: 204px;
      max-height: 204px;
    }
  }
`;
