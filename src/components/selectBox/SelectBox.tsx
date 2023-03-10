import React, { useState } from "react";
import styled from "@emotion/styled";
import Text from "../text/Text";
import { ArrowButton, Options } from "./elements";
import { regularFont } from "../../style/fonts/inedx";
import { black, gray } from "../../style/palette/palette";
import { SelectBoxProps } from "../../type/components/selectBoxTypes";

function SelectBox(props: SelectBoxProps) {
  const { options, view, mainColor, innerText, handleOpener } = props;
  const [placeholder, setPlaceholder] = useState(innerText);
  const handlePlaceholder = (e: React.MouseEvent) => {
    const { textContent } = e.currentTarget;
    setPlaceholder(textContent === "Recent" ? innerText : textContent);
  };

  return (
    <SelectBoxWrapper view={view}>
      <Text size={16} weight={regularFont}>
        {placeholder}
      </Text>
      <OptionsWrapper view={view}>
        <Options
          options={options}
          view={view}
          mainColor={mainColor}
          handleOpener={handleOpener}
          handlePlaceholder={handlePlaceholder}
        />
      </OptionsWrapper>
      <ArrowButton
        view={view}
        mainColor={mainColor}
        handleOpener={handleOpener}
      />
    </SelectBoxWrapper>
  );
}

export default SelectBox;

const SelectBoxWrapper = styled.div<{ view: boolean }>`
  width: 90%;
  max-width: 292px;
  height: 70%;
  min-height: 24px;
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
    }
  }
`;

const OptionsWrapper = styled.div<{ view: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
`;
