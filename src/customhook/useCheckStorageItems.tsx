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
        key => key === "makeHit" || key === "stackingHit" || key === "time"
      );
      if (keyArrayLength === 3) return item;
    })
    .filter(item => item);

  checkArrayEmpty(validateKeys);

  const validateValues = validateKeys
    .map(item => {
      const { makeHit, stackingHit, time } = item;
      if (makeHit >= 0 && makeHit <= 30 && stackingHit.length === 30 && time)
        return item;
    })
    .filter(item => item);

  const { time, makeHit, stackingHit } = {
    time: validateValues.map(item => item.time),
    makeHit: validateValues.map(item => item.makeHit),
    stackingHit: validateValues.map(item => item.stackingHit),
  };

  localStorage.setItem("dashboard", JSON.stringify(validateValues));

  return {
    allTrys: {
      time: time,
      makeHit: makeHit,
      stackingHit: stackingHit,
    },
    recentlyTrys: {
      time: time.slice(time.length - 5, time.length + 1),
      makeHit: makeHit.slice(makeHit.length - 5, makeHit.length + 1),
      stackingHit: stackingHit.slice(
        stackingHit.length - 5,
        stackingHit.length + 1
      ),
    },
  };
}

export default useCheckStorageItems;
