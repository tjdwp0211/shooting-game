import React, { useEffect, useState } from "react";
import Layout from "../../default/Layout";
import { RecentlyGames, UserInteraction } from "./elements";
import { PresenterProps } from "../../../type/pages/indexType";
import { useCheckStorageItems } from "../../../customhook";
import { UseCheckStorageItems } from "../../../type/customhook/useCheckStorageItemsType";
import { green, lightBlue, pink } from "../../../style/palette/palette";

function Presenter(props: PresenterProps) {
  const { gameProgress } = props;
  const [storageItems, setStorageItems] = useState<UseCheckStorageItems>();
  useEffect(() => {
    setStorageItems(useCheckStorageItems);
  }, [gameProgress.checkScore]);

  const recentlyGamesProps = {
    playerNames: storageItems ? storageItems.recentlyTries.playerNames : [],
    dataForChart: [
      {
        type: "bar" as "bar",
        label: "Time To Clear",
        data: storageItems && storageItems.recentlyTries.timeToClear,
        borderColor: lightBlue,
        backgroundColor: lightBlue,
      },
      {
        type: "bar" as "bar",
        label: "Hit",
        data: storageItems && storageItems.recentlyTries.makeHit,
        borderColor: pink,
        backgroundColor: pink,
      },
      {
        type: "bar" as "bar",
        label: "Score",
        data: storageItems && storageItems.recentlyTries.stackingScore,
        borderColor: green,
        backgroundColor: green,
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
