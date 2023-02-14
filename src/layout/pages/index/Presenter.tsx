import React, { useEffect, useState } from "react";
import Layout from "../../default/Layout";
import useCheckStorageItems from "../../../customhook/useCheckStorageItems";
import { RecentlyGames, UserInteraction } from "./elements";
import { PresenterProps } from "../../../type/pages/indexType";
import { UseCheckStorageItems } from "../../../type/customhook/useCheckStorageItemsType";

function Presenter(props: PresenterProps) {
  const { gameProgress } = props;
  const [storageItems, setStorageItems] = useState<UseCheckStorageItems>();
  useEffect(() => {
    setStorageItems(useCheckStorageItems);
  }, [gameProgress.checkScore]);

  const recentlyFifthScores =
    storageItems &&
    storageItems.recentlyTrys.stackingScore.map((el: number[]) =>
      el.reduce((prev, cur) => prev + cur, 0)
    );

  const recentlyGamesProps = {
    playTimes: storageItems ? storageItems.recentlyTrys.playTimes : [],
    dataForChart: [
      {
        type: "line" as "line",
        label: "Time To Clear",
        data: storageItems && storageItems.recentlyTrys.timeToClear,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        type: "bar" as "line",
        label: "Hit",
        data: storageItems && storageItems.recentlyTrys.makeHit,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        type: "bar" as "line",
        label: "Score",
        data: recentlyFifthScores,
        borderColor: "#76914a",
        backgroundColor: "#76914a",
      },
    ],
  };

  return (
    <Layout indexPage>
      <UserInteraction {...props} />
      <RecentlyGames {...recentlyGamesProps} />
    </Layout>
  );
}

export default Presenter;
