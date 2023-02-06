import React from "react";
import styled from "@emotion/styled";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

function LineChart() {
  const chartOptionsProps = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" as "bottom", usePointStyle: true },
      title: { display: true, text: "Recently 5 Games", font: { size: 30 } },
    },
    interaction: { mode: "index" as "index", intersect: false },
    y: {
      type: "linear",
      afterDataLimits(scale: LinearScale) {
        scale.max = scale.max * 1.2;
      },
    },
  };

  const chartDataProps: ChartData<"line", number[], string> = {
    labels: ["1st", "2nd", "3rd", "4th", "5th"],
    datasets: [
      {
        type: "line",
        label: "Hit",
        data: [12, 12, 21, 123, 124, 3],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        type: "bar" as "line",
        label: "Time To Clear",
        data: [12, 12, 21, 123, 124, 3],
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };

  return (
    <Wrapper>
      <Line
        options={chartOptionsProps}
        data={chartDataProps}
        width="600"
        height="600"
      />
    </Wrapper>
  );
}

export default LineChart;

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  canvas {
    @media (width < 1024px) {
      width: 80% !important;
      height: 35vw !important;
    }
    @media (width < 642px) {
      width: 50vw !important;
      height: 50vw !important;
    }
  }
`;
