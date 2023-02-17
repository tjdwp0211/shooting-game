import React from "react";
import styled from "@emotion/styled";
import { Box, Chart, Text } from "../../../../components";
import { boldFont } from "../../../../style/fonts/inedx";
import { RecentlyGamesProps } from "../../../../type/pages/indexType";
import { lightBlack } from "../../../../style/palette/palette";

function RecentlyGames({ dataForChart, playTimes }: RecentlyGamesProps) {
  const nullLabel = Array.from({ length: 5 }).fill("-") as string[];
  const defaultChartProps = {
    labelsForLineX: [...playTimes, ...nullLabel.slice(0, 5 - playTimes.length)],
    size: ["600", "600"],
  };

  return (
    <RecentlyGamesWrapper>
      <Text size={30} weight={boldFont}>
        Recently 5 Games
      </Text>
      <BoxWrapper>
        <Box bgColor="white">
          <Chart
            {...defaultChartProps}
            chartDatas={[dataForChart[0], dataForChart[1]]}
          />
          <Chart {...defaultChartProps} chartDatas={[dataForChart[2]]} />
        </Box>
      </BoxWrapper>
    </RecentlyGamesWrapper>
  );
}

export default RecentlyGames;

const RecentlyGamesWrapper = styled.div`
  width: 100%;
  height: 50%;
  max-height: 600px;
  min-height: 436px;
  background-color: white;
  color: ${lightBlack};
  p {
    text-align: center;
    padding: 16px 0px;
  }
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: 95%;
  padding: 0px 24px 24px 24px;
  display: flex;
  justify-content: center;
  background-color: white;
  @media (width > 642px) {
    align-items: center;
  }
  @media (width < 1024px) {
    & > * {
      width: 80% !important;
      height: 35vw !important;
    }
  }
  @media (width < 642px) {
    & > * {
      width: 50vw !important;
      height: 50vw !important;
    }
    canvas {
      width: 192px !important;
      height: 192px !important;
    }
  }
`;
