import React from "react";
import styled from "@emotion/styled";
import { Box, Chart, Text } from "../../../../components";
import { boldFont } from "../../../../style/fonts/inedx";
import { lightBlack, white } from "../../../../style/palette/palette";
import { RecentlyGamesProps } from "../../../../type/pages/indexType";

function RecentlyGames({ dataForChart, playerNames }: RecentlyGamesProps) {
  const nullLabel = Array.from({ length: 5 }).fill("-") as string[];
  const defaultChartProps = {
    labelsForLineX: [
      ...playerNames,
      ...nullLabel.slice(0, 5 - playerNames.length),
    ],
    size: ["600", "600"],
  };

  return (
    <RecentlyGamesWrapper>
      <Text size={30} weight={boldFont}>
        Recently 5 Games
      </Text>
      <BoxWrapper>
        <Box bgColor={white}>
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
  height: 80%;
  max-height: 640px;
  min-height: 436px;
  background-color: ${white};
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
  background-color: ${white};
  canvas {
    width: calc(80% - 24px);
    height: calc(80% - 24px);
    max-width: 524px;
    max-height: 524px;
    min-width: 212px;
    min-height: 212px;
  }
  article {
    width: 40vw;
    height: 40vw;
    max-width: 584px;
    max-height: 584px;
    min-width: 264px;
    min-height: 264px;
  }
  @media (max-width: 642px) {
    align-items: center;
  }
`;
