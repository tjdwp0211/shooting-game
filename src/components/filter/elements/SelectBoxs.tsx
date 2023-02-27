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
        view={selectBoxView.timeSelect}
        handleOnClick={handleTimeSelectBoxView}
      >
        Time To Clear
      </SelectBox>
      <SelectBox
        mainColor={green}
        options={scoreSelectBox}
        view={selectBoxView.scoreSelect}
        handleOnClick={handleScoreSelectBoxView}
      >
        Score
      </SelectBox>
      <SelectBox
        mainColor={pink}
        options={hitsSelectBox}
        view={selectBoxView.hitsSelect}
        handleOnClick={handleHitsSelectBoxView}
      >
        Hits
      </SelectBox>
    </>
  );
}

export default SelectBoxs;
