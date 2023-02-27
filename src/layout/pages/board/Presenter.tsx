import React from "react";
import styled from "@emotion/styled";
import Layout from "../../default/Layout";
import { black } from "../../../style/palette/palette";
import { Text } from "../../../components";
import { boldFont } from "../../../style/fonts/inedx";
import { AllTriesCharts, GridWrapper, Filter } from "./elements";
import { PresenterProps } from "../../../type/pages/boardType";

function Presenter(props: PresenterProps) {
  const {
    allTriesChartsProps,
    increasingSorting,
    descendingSorting,
    drawByPlayerName,
    defaultSorting,
  } = props;

  return (
    <Layout indexPage={false}>
      <TitleWrapper>
        <Text size={36} weight={boldFont}>
          DASHBOARD
        </Text>
      </TitleWrapper>
      <GridWrapper>
        <Filter
          increasingSorting={increasingSorting}
          descendingSorting={descendingSorting}
          drawByPlayerName={drawByPlayerName}
          defaultSorting={defaultSorting}
        />
        <AllTriesCharts {...allTriesChartsProps} />
      </GridWrapper>
    </Layout>
  );
}

export default Presenter;

const TitleWrapper = styled.div`
  width: 100%;
  height: 76px;
  p {
    text-align: center;
    padding: 12px 0px;
    color: ${black};
  }
`;
