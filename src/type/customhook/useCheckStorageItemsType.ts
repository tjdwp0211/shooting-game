import React from "react";

interface StorageItems {
  makeHit: number;
  stackingScore: number;
  timeToClear: number;
  playerName: string;
}

interface SortStorageItemsByKey {
  timeToClear: number[] | [];
  makeHit: number[] | [];
  stackingScore: number[] | [];
  playerNames: string[] | [];
}

interface UseCheckStorageItems {
  allTries: SortStorageItemsByKey;
  recentlyTries: SortStorageItemsByKey;
  getItems: StorageItems[];
}

export type { StorageItems, SortStorageItemsByKey, UseCheckStorageItems };
