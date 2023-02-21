import React from "react";

interface StorageItems {
  makeHit: number;
  stackingScore: number;
  timeToClear: number;
  playerName: string;
}

interface UseCheckStorageItems {
  allTries: {
    timeToClear: number[] | [];
    makeHit: number[] | [];
    stackingScore: number[] | [];
    playerNames: string[];
  };
  recentlyTrys: {
    timeToClear: number[] | [];
    makeHit: number[] | [];
    stackingScore: number[] | [];
    playerNames: string[];
  };
}

export type { StorageItems, UseCheckStorageItems };
