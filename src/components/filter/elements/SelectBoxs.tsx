import React from "react";
import SelectBox from "../../selectBox/SelectBox";
import { SelectBoxsProps } from "../../../type/components/filterType";
import { green, lightBlue, pink } from "../../../style/palette/palette";

function SelectBoxs(props: SelectBoxsProps) {
  const { optionsProps, selectBoxView, selectBoxViewHandlers } = props;
  const { timeSelectBox, scoreSelectBox, hitsSelectBox } = optionsProps;
  const {
    handleTimeSelectBoxView,
    handleScoreSelectBoxView,
    handleHitsSelectBoxView,
  } = selectBoxViewHandlers;

  return (
    <>
      <SelectBox
        mainColor={lightBlue}
        options={timeSelectBox}
        innerText={"Time To Clear"}
        view={selectBoxView.timeSelect}
        handleOpener={handleTimeSelectBoxView}
      />
      <SelectBox
        mainColor={green}
        options={scoreSelectBox}
        innerText={"Score"}
        view={selectBoxView.scoreSelect}
        handleOpener={handleScoreSelectBoxView}
      />
      <SelectBox
        mainColor={pink}
        options={hitsSelectBox}
        innerText={"Hits"}
        view={selectBoxView.hitsSelect}
        handleOpener={handleHitsSelectBoxView}
      />
    </>
  );
}

export default SelectBoxs;
