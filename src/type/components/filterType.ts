import React from "react";
import { SortStorageItemsByKey } from "../customhook/useCheckStorageItemsType";

interface ContainerProps {
  increasingSorting: (key: keyof SortStorageItemsByKey) => void;
  descendingSorting: (key: keyof SortStorageItemsByKey) => void;
  drawByPlayerName: (playerName: string) => void;
  defaultSorting: () => void;
}

interface PresenterProps extends SelectBoxsProps {
  defaultSorting: () => void;
  drawByPlayerName: (playerName: string) => void;
}

interface SelectBoxsProps {
  selectBoxView: {
    timeSelect: boolean;
    scoreSelect: boolean;
    hitsSelect: boolean;
  };
  optionsProps: {
    timeSelectBox: { innerText: string; func: () => void }[];
    scoreSelectBox: { innerText: string; func: () => void }[];
    hitsSelectBox: { innerText: string; func: () => void }[];
  };
  selectBoxViewHandlers: {
    handleTimeSelectBoxView: () => void;
    handleScoreSelectBoxView: () => void;
    handleHitsSelectBoxView: () => void;
  };
}

interface SearchPlayerNameProps {
  defaultSorting: () => void;
  drawByPlayerName: (name: string) => void;
}

export type {
  ContainerProps,
  PresenterProps,
  SelectBoxsProps,
  SearchPlayerNameProps,
};
