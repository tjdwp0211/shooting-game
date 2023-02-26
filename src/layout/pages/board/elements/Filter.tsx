import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { SelectBox } from "../../../../components";
import {
  black,
  green,
  lightBlue,
  pink,
} from "../../../../style/palette/palette";
import { PlayerNameInput } from "../../../../components/check-score/elements";
import { FilterProps } from "../../../../type/pages/boardType";

function Filter(props: FilterProps) {
  const {
    increasingSorting,
    descendingSorting,
    drawByPlayerName,
    defaultSorting,
    storageItems,
  } = props;
  const [searchValue, setSearchValue] = useState("");
  const [{ timeSelect, scoreSelect, hitsSelect }, setSelectBoxView] = useState({
    timeSelect: false,
    scoreSelect: false,
    hitsSelect: false,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
