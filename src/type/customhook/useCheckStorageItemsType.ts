import React from "react";

interface StorageItems {
  makeHit: number;
  stackingHit: boolean[];
  time: number;
}

interface UseCheckStorageItems {
  time: number[] | [];
  makeHit: number[] | [];
  stackingHit: boolean[][] | [][];
}

export type { StorageItems, UseCheckStorageItems };
