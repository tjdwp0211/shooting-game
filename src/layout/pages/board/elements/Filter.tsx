import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { SelectBox } from "../../../../components";
import { green, lightBlue, pink } from "../../../../style/palette/palette";

function Filter() {
  const [{ timeSelect, scoreSelect, hitsSelect }, setSelectBoxView] = useState({
    timeSelect: false,
    scoreSelect: false,
    hitsSelect: false,
  });

  const handleOptionsView = useCallback((key: string) => {
    const closeAllSelectView = {
      timeSelect: false,
      scoreSelect: false,
      hitsSelect: false,
    };
    setSelectBoxView(prev => ({ ...closeAllSelectView, [key]: !prev[key] }));
  }, []);

  const {
    handleTimeOptionsView,
    handleScoreOptionsView,
    handleHitsOptionsView,
  } = {
    handleTimeOptionsView() {
      handleOptionsView("timeSelect");
    },
    handleScoreOptionsView() {
      handleOptionsView("scoreSelect");
    },
    handleHitsOptionsView() {
      handleOptionsView("hitsSelect");
    },
  };

  return (
    <SelectBoxWrapper>
      <input />
      <SelectBox
        view={timeSelect}
        mainColor={lightBlue}
        handleOnClick={handleTimeOptionsView}
        options={["All", "Quick", "Slow"]}
      >
        Time To Clear
      </SelectBox>
      <SelectBox
        view={scoreSelect}
        mainColor={green}
        handleOnClick={handleScoreOptionsView}
        options={["All", "High", "Low"]}
      >
        Score
      </SelectBox>
      <SelectBox
        view={hitsSelect}
        mainColor={pink}
        handleOnClick={handleHitsOptionsView}
        options={["All", "High", "Low"]}
      >
        Hits
      </SelectBox>
    </SelectBoxWrapper>
  );
}

export default Filter;

const SelectBoxWrapper = styled.article`
  width: 100%;
  height: 80%;
  padding: 24px 0px;
  display: grid;
  grid-template-rows: 20px 20% 20% 20%;
  align-items: center;
  justify-items: center;
  gap: 2vw;

  @media (width < 1024px) {
    align-content: center;
    @media (width < 640px) {
      align-content: start;
      padding: 0;
      & > div {
        width: 50%;
      }
    }
  }
`;
