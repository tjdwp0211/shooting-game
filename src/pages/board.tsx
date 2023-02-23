import React, { useEffect, useState } from "react";
import { useCheckStorageItems } from "../customhook";
import Presenter from "../layout/pages/board/Presenter";
import { UseCheckStorageItems } from "../type/customhook/useCheckStorageItemsType";

function Board() {
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

  return <Presenter allTriesChartsProps={allTriesChartsProps} />;
}

export default Board;
