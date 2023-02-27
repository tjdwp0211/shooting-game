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

interface FilterContainerProps {
  increasingSorting: (key: keyof SortStorageItemsByKey) => void;
  descendingSorting: (key: keyof SortStorageItemsByKey) => void;
  drawByPlayerName: (playerName: string) => void;
  defaultSorting: () => void;
}

interface FilterPresenterProps {
  defaultSorting: () => void;
  handleTimeSelectBoxView: () => void;
  handleScoreSelectBoxView: () => void;
  handleHitsSelectBoxView: () => void;
  drawByPlayerName: (playerName: string) => void;
  timeSelectBox: { innerText: string; func: () => void }[];
  scoreSelectBox: { innerText: string; func: () => void }[];
  hitsSelectBox: { innerText: string; func: () => void }[];
  selectBoxView: {
    timeSelect: boolean;
    scoreSelect: boolean;
    hitsSelect: boolean;
  };
}

export type { PresenterProps, FilterContainerProps, FilterPresenterProps };
