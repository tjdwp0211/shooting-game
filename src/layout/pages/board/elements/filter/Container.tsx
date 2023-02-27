import React, { useState } from "react";
import Presenter from "./Presenter";
import { FilterContainerProps } from "../../../../../type/pages/boardType";

function Container(props: FilterContainerProps) {
  const {
    increasingSorting,
    descendingSorting,
    drawByPlayerName,
    defaultSorting,
  } = props;
  const [selectBoxView, setSelectBoxView] = useState({
    timeSelect: false,
    scoreSelect: false,
    hitsSelect: false,
  });

  const handleSelectBoxView = (key: string) => {
    const closeAllSelectView = {
      timeSelect: false,
      scoreSelect: false,
      hitsSelect: false,
    };
    setSelectBoxView(prev => ({ ...closeAllSelectView, [key]: !prev[key] }));
  };

  const selectBoxViewHandlers = {
    handleTimeSelectBoxView: () => handleSelectBoxView("timeSelect"),
    handleScoreSelectBoxView: () => handleSelectBoxView("scoreSelect"),
    handleHitsSelectBoxView: () => handleSelectBoxView("hitsSelect"),
  };

  const optionsPropsBasket = {
    timeSelectBox: [
      { innerText: "All", func: defaultSorting },
      { innerText: "Quicker", func: () => descendingSorting("timeToClear") },
      { innerText: "Slower", func: () => increasingSorting("timeToClear") },
    ],
    scoreSelectBox: [
      { innerText: "All", func: defaultSorting },
      { innerText: "Higher", func: () => descendingSorting("stackingScore") },
      { innerText: "Lower", func: () => increasingSorting("stackingScore") },
    ],
    hitsSelectBox: [
      { innerText: "All", func: defaultSorting },
      { innerText: "Higher", func: () => descendingSorting("makeHit") },
      { innerText: "Lower", func: () => increasingSorting("makeHit") },
    ],
  };

  return (
    <Presenter
      drawByPlayerName={drawByPlayerName}
      defaultSorting={defaultSorting}
      selectBoxView={selectBoxView}
      {...selectBoxViewHandlers}
      {...optionsPropsBasket}
    />
  );
}

export default Container;
