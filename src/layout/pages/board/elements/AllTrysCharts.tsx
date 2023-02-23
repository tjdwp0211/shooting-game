import React from "react";
import { Chart } from "../../../../components";
import { ChartDatas } from "../../../../type/components/chartType";

interface AllTriesChartsProps {
  playerNames: string[];
  dataForChart: ChartDatas[];
}

function AllTriesCharts(props: AllTriesChartsProps) {
  const { playerNames, dataForChart } = props;

  const nullLabel = Array.from({ length: 15 }).fill("-") as string[];
  const defaultChartProps = {
    labelsForLineX: [
      ...playerNames,
      ...nullLabel.slice(0, 15 - playerNames.length),
    ],
    size: ["300", "300"],
  };

  return (
    <>
      <Chart {...defaultChartProps} chartDatas={[dataForChart[0]]} />
      <Chart {...defaultChartProps} chartDatas={[dataForChart[1]]} />
      <Chart {...defaultChartProps} chartDatas={[dataForChart[2]]} />
    </>
  );
}

export default AllTriesCharts;
