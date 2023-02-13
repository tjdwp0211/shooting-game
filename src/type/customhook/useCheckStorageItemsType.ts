import React from "react";

interface StorageItems {
  makeHit: number;
  stackingHit: boolean[];
  timeToClear: number;
  playTimes: string;
}

interface UseCheckStorageItems {
  allTrys: {
    timeToClear: number[] | [];
    makeHit: number[] | [];
    stackingHit: boolean[][] | [][];
    playTimes: string[];
  };
  recentlyTrys: {
    timeToClear: number[] | [];
    makeHit: number[] | [];
    stackingHit: boolean[][] | [][];
    playTimes: string[];
  };
}

export type { StorageItems, UseCheckStorageItems };
