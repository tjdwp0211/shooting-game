import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Layout from "../../default/Layout";
import { black } from "../../../style/palette/palette";
import { Text } from "../../../components";
import { boldFont } from "../../../style/fonts/inedx";
import { UseCheckStorageItems } from "../../../type/customhook/useCheckStorageItemsType";
import { useCheckStorageItems } from "../../../customhook";
import { AllTriesCharts, Filter } from "./elements";

interface PresenterProps {}

function Presenter(props: PresenterProps) {
  const [storageItems, setStorageItems] = useState<UseCheckStorageItems>();
  useEffect(() => {
    setStorageItems(useCheckStorageItems);
  }, []);

  const allTriesChartsProps = {
    playerNames: storageItems ? storageItems.recentlyTrys.playerNames : [],
    dataForChart: [
      {
        type: "bar" as "line",
        label: "Time To Clear",
        data: storageItems && storageItems.allTries.timeToClear,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        type: "bar" as "line",
        label: "Hit",
        data: storageItems && storageItems.allTries.makeHit,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        type: "bar" as "line",
        label: "Score",
        data: storageItems && storageItems.allTries.stackingScore,
        borderColor: "#76914a",
        backgroundColor: "#76914a",
      },
    ],
  };

  return (
    <Layout indexPage={false}>
      <TopSectionWrapper>
        <Text size={36} weight={boldFont}>
          Dashboard
        </Text>
      </TopSectionWrapper>
      <AllTriesCharts {...allTriesChartsProps}>
        <Filter />
      </AllTriesCharts>
    </Layout>
  );
}

export default Presenter;

const TopSectionWrapper = styled.div`
  width: 100%;
  height: 76px;
  p {
    text-align: center;
    padding: 12px 0px;
    color: ${black};
  }
`;
