import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Layout from "../layout/default/Layout";
import { Chart, Text } from "../components";
import { black } from "../style/palette/palette";
import { useCheckStorageItems } from "../customhook";
import { UseCheckStorageItems } from "../type/customhook/useCheckStorageItemsType";
import { boldFont } from "../style/fonts/inedx";

function Board() {
  const [storageItems, setStorageItems] = useState<UseCheckStorageItems>();
  const nullLabel = Array.from({ length: 15 }).fill("-") as string[];
  const playerNames = storageItems ? storageItems.allTrys.playerNames : [];
  useEffect(() => {
    setStorageItems(useCheckStorageItems);
  }, []);
  const defaultChartProps = {
    labelsForLineX: [
      ...playerNames,
      ...nullLabel.slice(0, 15 - playerNames.length),
    ],
    size: ["300", "300"],
  };
  const chartDatas = [
    {
      type: "bar" as "line",
      label: "Time To Clear",
      data: storageItems && storageItems.allTrys.timeToClear,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      type: "bar" as "line",
      label: "Hit",
      data: storageItems && storageItems.allTrys.makeHit,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      type: "bar" as "line",
      label: "Score",
      data: storageItems && storageItems.allTrys.stackingScore,
      borderColor: "#76914a",
      backgroundColor: "#76914a",
    },
  ];

  return (
    <Layout indexPage={false}>
      <TopSectionWrapper>
        <Text size={36} weight={boldFont}>
          Show All Your Trys
        </Text>
        <div>필터 들어갈 곳</div>
      </TopSectionWrapper>
      <ChartWrapper>
        <Chart {...defaultChartProps} chartDatas={[chartDatas[0]]} />
        <Chart {...defaultChartProps} chartDatas={[chartDatas[1]]} />
        <Chart {...defaultChartProps} chartDatas={[chartDatas[2]]} />
      </ChartWrapper>
    </Layout>
  );
}

export default Board;

const TopSectionWrapper = styled.div`
  width: 100%;
  height: 124px;
  p {
    padding: 12px 0px;
    color: ${black};
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > * {
    width: 39vw;
    max-width: 488px;
    height: 39vw;
    max-height: 488px;
  }
  @media (max-width: 1720px) {
    & > * {
      width: 30vw !important;
      height: 30vw !important;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    & > * {
      width: 296px !important;
      height: 296px !important;
    }
    @media (max-width: 766px) {
      & > * {
        min-width: 186px;
        width: 40% !important;
        min-height: 186px;
        height: 40% !important;
      }
    }
  }
  @media (orientation: landscape) {
    flex-direction: row;
  }
`;
