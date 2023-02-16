import React from "react";
import {
  StorageItems,
  UseCheckStorageItems,
} from "../type/customhook/useCheckStorageItemsType";

function useCheckStorageItems(): UseCheckStorageItems {
  const storageItems: StorageItems[] =
    JSON.parse(localStorage.getItem("dashboard")) || [];
  const checkArrayEmpty = (array: StorageItems[]) => {
    if (!array.length) return { time: [], makeHit: [], stackingScore: [] };
  };

  checkArrayEmpty(storageItems);

  const validateKeys = storageItems
    .map(item => {
      const { length: keyArrayLength } = Object.keys(item).filter(
        key =>
          key === "makeHit" ||
          key === "stackingScore" ||
          key === "timeToClear" ||
          key === "playTimes"
      );
      if (keyArrayLength === 4) return item;
    })
    .filter(item => item);

  checkArrayEmpty(validateKeys);

  const validateValues = validateKeys
    .map(item => {
      const { makeHit, stackingScore, timeToClear, playTimes } = item;
      if (
        makeHit >= 0 &&
        makeHit <= 30 &&
        stackingScore >= 0 &&
        stackingScore <= 300 &&
        timeToClear &&
        playTimes
      )
        return item;
    })
    .filter(item => item);

  const { timeToClear, makeHit, stackingScore, playTimes } = {
    timeToClear: validateValues.map(item => item.timeToClear),
    makeHit: validateValues.map(item => item.makeHit),
    stackingScore: validateValues.map(item => item.stackingScore),
    playTimes: validateValues.map(item => item.playTimes),
  };

  localStorage.setItem("dashboard", JSON.stringify(validateValues));

  const recentlyFifthTrys = (arr: Array<string | number> | number[][]) => {
    if (arr.length > 5) return arr.slice(arr.length - 5, arr.length + 1);
    else return arr;
  };

  return {
    allTrys: {
      timeToClear: timeToClear,
      makeHit: makeHit,
      stackingScore: stackingScore,
      playTimes: playTimes,
    },
    recentlyTrys: {
      timeToClear: recentlyFifthTrys(timeToClear) as number[] | [],
      makeHit: recentlyFifthTrys(makeHit) as number[] | [],
      stackingScore: recentlyFifthTrys(stackingScore) as number[] | [],
      playTimes: recentlyFifthTrys(playTimes) as string[],
    },
  };
}

export default useCheckStorageItems;
