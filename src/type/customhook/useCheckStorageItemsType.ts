import React from "react";

interface StorageItems {
  makeHit: number;
  stackingScore: number[];
  timeToClear: number;
  playTimes: string;
}

interface UseCheckStorageItems {
  allTrys: {
    timeToClear: number[] | [];
    makeHit: number[] | [];
    stackingScore: number[][] | [][];
    playTimes: string[];
  };
  recentlyTrys: {
    timeToClear: number[] | [];
    makeHit: number[] | [];
    stackingScore: number[][] | [][];
    playTimes: string[];
  };
}

export type { StorageItems, UseCheckStorageItems };
