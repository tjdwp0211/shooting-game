import React from "react";
import styled from "@emotion/styled";
import Text from "../text/Text";
import { ArrowButton, Options } from "./elements";
import { gray } from "../../style/palette/palette";
import { regularFont } from "../../style/fonts/inedx";

interface SelectBoxProps {
  view: boolean;
  options: string[];
  mainColor: string;
  children: React.ReactNode;
  handleOnClick: () => void;
}

function SelectBox(props: SelectBoxProps) {
  const {
    options,
    view,
    mainColor,
    children: placeholder,
    handleOnClick,
  } = props;
  return (
    <SelectBoxWrapper view={view}>
      <Options options={options} view={view} mainColor={mainColor} />
      <ArrowButton
        view={view}
        mainColor={mainColor}
        handleOnClick={handleOnClick}
      />
    </SelectBoxWrapper>
  );
}

export default SelectBox;

const SelectBoxWrapper = styled.div<{ view: boolean }>`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 4px 0px ${props => !props.view && gray};
  position: relative;
  border-radius: 12px;
  /* overflow: hidden; */
  & > p {
    width: 80%;
    height: 100%;
    color: black;
  }

  @media (max-width: 820px) {
    height: 50%;
  }
`;
