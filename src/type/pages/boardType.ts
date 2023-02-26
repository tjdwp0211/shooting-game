import React, { Dispatch } from "react";
import { ChartDatas } from "../components/chartType";
import {
  SortStorageItemsByKey,
  UseCheckStorageItems,
} from "../customhook/useCheckStorageItemsType";

interface FilterProps {
  // inputValue: string;
  // handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  storageItems: UseCheckStorageItems;
  increasingSorting: (key: keyof SortStorageItemsByKey[]) => void;
  descendingSorting: (key: keyof SortStorageItemsByKey[]) => void;
  drawByPlayerName: (playerName: string) => void;
  defaultSorting: () => void;
}

interface PresenterProps {
  allTriesChartsProps: {
    playerNames: string[];
    dataForChart: ChartDatas[];
  };
  storageItems: UseCheckStorageItems;
  increasingSorting: (key: keyof SortStorageItemsByKey[]) => void;
  descendingSorting: (key: keyof SortStorageItemsByKey[]) => void;
  drawByPlayerName: (playerName: string) => void;
  defaultSorting: () => void;
}

export type { FilterProps, PresenterProps };
