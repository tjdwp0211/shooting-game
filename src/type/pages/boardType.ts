import React from "react";
import { ChartDatas } from "../components/chartType";
import { SortStorageItemsByKey } from "../customhook/useCheckStorageItemsType";

interface PresenterProps {
  allTriesChartsProps: {
    playerNames: string[];
    dataForChart: ChartDatas[];
  };
  increasingSorting: (key: keyof SortStorageItemsByKey) => void;
  descendingSorting: (key: keyof SortStorageItemsByKey) => void;
  drawByPlayerName: (playerName: string) => void;
  defaultSorting: () => void;
}

export type { PresenterProps };
