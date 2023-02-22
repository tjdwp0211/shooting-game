import React from "react";
import styled from "@emotion/styled";
import { Chart } from "../../../../components";
import { ChartDatas } from "../../../../type/components/chartType";

interface AllTriesChartsProps {
  dataForChart: ChartDatas[];
  playerNames: string[];
  children: React.ReactNode;
}

function AllTriesCharts(props: AllTriesChartsProps) {
  const { dataForChart, playerNames, children: filterComponent } = props;

  const nullLabel = Array.from({ length: 15 }).fill("-") as string[];
  const defaultChartProps = {
    labelsForLineX: [
      ...playerNames,
      ...nullLabel.slice(0, 15 - playerNames.length),
    ],
    size: ["300", "300"],
  };
  return (
    <ChartWrapper>
      {filterComponent}
      <Chart {...defaultChartProps} chartDatas={[dataForChart[0]]} />
      <Chart {...defaultChartProps} chartDatas={[dataForChart[1]]} />
      <Chart {...defaultChartProps} chartDatas={[dataForChart[2]]} />
    </ChartWrapper>
  );
}

export default AllTriesCharts;

const ChartWrapper = styled.article`
  width: 100%;
  height: 90%;
  padding-bottom: 24px;
  display: grid;
  grid-template-areas:
    "timeChart filter"
    "hitChart scoreChart";
  grid-template-columns: repeat(2, 1fr);
  div:nth-of-type(1) {
    grid-area: filter;
  }
  article:nth-of-type(1) {
    grid-area: timeChart;
  }
  article:nth-of-type(2) {
    grid-area: hitChart;
  }
  article:nth-of-type(3) {
    grid-area: scoreChart;
  }
  & > * {
    justify-self: center;
    align-self: center;
    width: 100%;
    min-width: 204px;
    height: 100%;
    min-height: 204px;
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
  @media (orientation: landscape) or (max-width: 1024) {
    grid-template-columns: repeat(2, 2fr);
    grid-template-areas:
      "timeChart filter"
      "hitChart scoreChart";
    & > * {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
