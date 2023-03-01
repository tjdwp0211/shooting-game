import React from "react";
import styled from "@emotion/styled";
import { SearchPlayerName, SelectBoxs } from "./elements";
import { PresenterProps } from "../../type/components/filterType";

function Presenter(props: PresenterProps) {
  const {
    optionsProps,
    selectBoxView,
    selectBoxViewHandlers,
    defaultSorting,
    drawByPlayerName,
  } = props;

  return (
    <SelectBoxWrapper>
      <SearchPlayerName
        defaultSorting={defaultSorting}
        drawByPlayerName={drawByPlayerName}
      />
      <SelectBoxs
        optionsProps={optionsProps}
        selectBoxView={selectBoxView}
        selectBoxViewHandlers={selectBoxViewHandlers}
      />
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
    @media (width < 640px) {
      align-content: start;
      padding: 0;
      & > div {
        width: 60%;
      }
    }
  }
`;
