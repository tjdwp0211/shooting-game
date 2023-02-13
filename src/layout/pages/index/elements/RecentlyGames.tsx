import React from "react";
import styled from "@emotion/styled";
import { Box, Chart, Text } from "../../../../components";
import { boldFont } from "../../../../style/fonts/inedx";
import { RecentlyGamesProps } from "../../../../type/pages/indexType";
import { lightBlack } from "../../../../style/palette/palette";

function RecentlyGames({ dataForChart, playTimes }: RecentlyGamesProps) {
  const defaultArray = ["-", "-", "-", "-", "-"];
  const defaultChartProps = {
    labelsForLineX: [
      ...playTimes,
      ...Array.from(defaultArray).slice(0, 5 - playTimes.length),
    ],
    size: ["600", "600"],
  };

  return (
    <RecentlyGamesWrapper>
      <Text size={30} weight={boldFont}>
        Recently 5 Games
      </Text>
      <BoxWrapper>
        <Box>
          <Chart
            {...defaultChartProps}
            chartDatas={[dataForChart[0]]}
            title="Hits"
          />
          <Chart
            {...defaultChartProps}
            chartDatas={[dataForChart[1]]}
            title="Time To Clear"
          />
        </Box>
      </BoxWrapper>
    </RecentlyGamesWrapper>
  );
}

export default RecentlyGames;

const RecentlyGamesWrapper = styled.div`
  width: 100%;
  height: 105vh;
  max-height: 600px;
  background-color: white;
  color: ${lightBlack};
  p {
    text-align: center;
    padding: 16px 0px;
  }
  @media (width < 1024px) {
    height: 462px;
  }
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: 90%;
  padding: 0px 24px 24px 24px;
  display: flex;
  justify-content: center;
  & > * {
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
