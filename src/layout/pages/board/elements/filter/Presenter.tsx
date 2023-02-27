import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  black,
  green,
  lightBlue,
  pink,
} from "../../../../../style/palette/palette";
import { SelectBox } from "../../../../../components";
import { PlayerNameInput } from "../../../../../components/check-score/elements";
import { FilterPresenterProps } from "../../../../../type/pages/boardType";

function Presenter(props: FilterPresenterProps) {
  const [searchValue, setSearchValue] = useState("");
  const {
    defaultSorting,
    drawByPlayerName,
    handleTimeSelectBoxView,
    handleScoreSelectBoxView,
    handleHitsSelectBoxView,
    timeSelectBox,
    scoreSelectBox,
    hitsSelectBox,
    selectBoxView,
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    drawByPlayerName(searchValue);
  };

  return (
    <SelectBoxWrapper>
      <form onSubmit={handleSubmit}>
        <PlayerNameInput
          mainColor={black}
          inputState={{ value: searchValue }}
          handleOnChange={handleOnChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          search
        </button>
        <button type="button" onClick={defaultSorting}>
          default
        </button>
      </form>
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
    </SelectBoxWrapper>
  );
}

export default Presenter;

const SelectBoxWrapper = styled.article`
  width: 100%;
  height: 80%;
  padding: 24px 0px;
  display: grid;
  grid-template-rows: 56px 20% 2vw 20% 2vw 20%;
  align-items: center;
  justify-items: center;
  column-gap: 16px;
  & > div:nth-of-type(1) {
    grid-area: 2;
  }
  & > div:nth-of-type(2) {
    grid-area: 4;
  }
  & > div:nth-of-type(3) {
    grid-area: 6;
  }

  @media (width < 1024px) {
    align-content: center;
    @media (max-width: 820px) {
      input {
        height: 24px;
      }
      @media (width < 640px) {
        align-content: start;
        padding: 0;
        & > div {
          width: 50%;
        }
      }
    }
  }
`;
