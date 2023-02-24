import React from "react";
import styled from "@emotion/styled";
import { ArrowButtonProps } from "../../../type/components/selectBoxTypes";

function ArrowButton({ view, mainColor, handleOnClick }: ArrowButtonProps) {
  return (
    <ArrowImgWrapper view={view} mainColor={mainColor} onClick={handleOnClick}>
      <Arrow view={view} mainColor={mainColor} />
    </ArrowImgWrapper>
  );
}

export default ArrowButton;

const ArrowImgWrapper = styled.div<{ view: boolean; mainColor: string }>`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: black;
  background-color: ${props => (props.view ? "white" : props.mainColor)};
  transition: background-color 0.5s;
  border-radius: 0 12px 12px 0;
`;

const Arrow = styled.div<{ view: boolean; mainColor: string }>`
  width: 8px;
  height: 8px;
  border: 1px solid ${props => (props.view ? props.mainColor : "white")};
  border-bottom: none;
  border-left: none;
  transform: rotate(${props => (props.view ? -45 : 135)}deg);
  transition: transform 0.3s;
  margin-bottom: ${props => (props.view ? -4 : 4)}px;
`;
