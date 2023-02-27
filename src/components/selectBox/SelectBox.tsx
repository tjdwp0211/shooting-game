import React from "react";
import styled from "@emotion/styled";
import Text from "../text/Text";
import { ArrowButton, Options } from "./elements";
import { black, gray } from "../../style/palette/palette";
import { SelectBoxProps } from "../../type/components/selectBoxTypes";
import { regularFont } from "../../style/fonts/inedx";

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
      <Text size={16} weight={regularFont}>
        {placeholder}
      </Text>
      <OptionsWrapper view={view}>
        <Options options={options} view={view} mainColor={mainColor} />
      </OptionsWrapper>
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
  height: 70%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 0px 4px 0px ${props => !props.view && gray};
  position: relative;
  border-radius: ${props => (props.view ? "12px 12px 12px 0px" : "12px")};
  & > p {
    width: 80%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10%;
    color: ${black};
  }

  @media (max-width: 820px) {
    height: 50%;
    & > p {
      width: 80%;
    }
    @media (width < 640px) {
      padding: 0;
      & > p {
        padding-top: 4px;
      }
    }
  }
`;

const OptionsWrapper = styled.div<{ view: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
`;
