import React, { useEffect, useState } from "react";
import Presenter from "../layout/pages/board/Presenter";
import { useCheckStorageItems } from "../customhook";
import {
  StorageItems,
  SortStorageItemsByKey,
  UseCheckStorageItems,
} from "../type/customhook/useCheckStorageItemsType";

function Board() {
  const [storageItems, setStorageItems] = useState<UseCheckStorageItems>();
  useEffect(() => {
    setStorageItems(useCheckStorageItems);
  }, []);

  const newAllTries = (arr: StorageItems[]) => {
    return {
      timeToClear: arr.map(el => el.timeToClear),
      makeHit: arr.map(el => el.makeHit),
      stackingScore: arr.map(el => el.stackingScore),
      playerNames: arr.map(el => el.playerName),
    };
  };

  const increasingSorting = (key: keyof SortStorageItemsByKey) => {
    const { getItems } = storageItems;
    const sortingArray = getItems.sort((a, b) => a[key] - b[key]);
    setStorageItems(prev => ({ ...prev, allTries: newAllTries(sortingArray) }));
  };

  const descendingSorting = (key: keyof SortStorageItemsByKey) => {
    const { getItems } = storageItems;
    const sortingArray = getItems.sort((a, b) => b[key] - a[key]);
    setStorageItems(prev => ({ ...prev, allTries: newAllTries(sortingArray) }));
  };

  const drawByPlayerName = (input: string) => {
    const { getItems } = storageItems;
    const filteringArr = getItems
      .map(item => item.playerName.includes(input) && item)
      .filter(elementIsDefined => elementIsDefined);
    setStorageItems(prev => ({ ...prev, allTries: newAllTries(filteringArr) }));
  };

  const defaultSorting = () => {
    setStorageItems(useCheckStorageItems);
  };

  const allTriesChartsProps = {
    playerNames: storageItems ? storageItems.allTries.playerNames : [],
    dataForChart: [
      {
        type: "bar" as "bar",
        label: "Time To Clear",
        data: storageItems && storageItems.allTries.timeToClear,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        type: "bar" as "bar",
        label: "Hit",
        data: storageItems && storageItems.allTries.makeHit,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        type: "bar" as "bar",
        label: "Score",
        data: storageItems && storageItems.allTries.stackingScore,
        borderColor: "#76914a",
        backgroundColor: "#76914a",
      },
    ],
  };

  return (
    <Presenter
      allTriesChartsProps={allTriesChartsProps}
      increasingSorting={increasingSorting}
      descendingSorting={descendingSorting}
      drawByPlayerName={drawByPlayerName}
      defaultSorting={defaultSorting}
    />
  );
}

export default Board;
