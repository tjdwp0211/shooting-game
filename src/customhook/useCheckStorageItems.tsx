import React from "react";
import {
  StorageItems,
  UseCheckStorageItems,
} from "../type/customhook/useCheckStorageItemsType";

function useCheckStorageItems(): UseCheckStorageItems {
  const storageItems: StorageItems[] =
    JSON.parse(localStorage.getItem("dashboard")) || [];
  const checkArrayEmpty = (array: StorageItems[]) => {
    if (!array.length) return { time: [], makeHit: [], stackingHit: [] };
  };

  checkArrayEmpty(storageItems);

  const validateKeys = storageItems
    .map(item => {
      const { length: keyArrayLength } = Object.keys(item).filter(
        key =>
          key === "makeHit" ||
          key === "stackingHit" ||
          key === "timeToClear" ||
          key === "playTimes"
      );
      if (keyArrayLength === 4) return item;
    })
    .filter(item => item);

  checkArrayEmpty(validateKeys);

  const validateValues = validateKeys
    .map(item => {
      const { makeHit, stackingHit, timeToClear, playTimes } = item;
      if (
        makeHit >= 0 &&
        makeHit <= 30 &&
        stackingHit.length === 30 &&
        timeToClear &&
        playTimes
      )
        return item;
    })
    .filter(item => item);

  const { timeToClear, makeHit, stackingHit, playTimes } = {
    timeToClear: validateValues.map(item => item.timeToClear),
    makeHit: validateValues.map(item => item.makeHit),
    stackingHit: validateValues.map(item => item.stackingHit),
    playTimes: validateValues.map(item => item.playTimes),
  };

  localStorage.setItem("dashboard", JSON.stringify(validateValues));

  const recentlyFifthTrys = (arr: Array<string | number> | boolean[][]) => {
    if (arr.length > 5) return arr.slice(arr.length - 5, arr.length + 1);
    else return arr;
  };

  return {
    allTrys: {
      timeToClear: timeToClear,
      makeHit: makeHit,
      stackingHit: stackingHit,
      playTimes: playTimes,
    },
    recentlyTrys: {
      timeToClear: recentlyFifthTrys(timeToClear) as number[] | [],
      makeHit: recentlyFifthTrys(makeHit) as number[] | [],
      stackingHit: recentlyFifthTrys(stackingHit) as boolean[][] | [],
      playTimes: recentlyFifthTrys(playTimes) as string[],
    },
  };
}

export default useCheckStorageItems;
