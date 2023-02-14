import React from "react";
import styled from "@emotion/styled";
import { CircleProps } from "../../../type/components/targetBoardType";

function Circle({ point, radius, background, handleCircleClick }: CircleProps) {
  return (
    <CircleElement
      id={point}
      size={radius}
      background={background}
      onMouseDown={handleCircleClick}
    />
  );
}

export default Circle;

const CircleElement = styled.div<{ size: number; background: string }>`
  width: ${props => props.size}%;
  height: ${props => props.size}%;
  position: absolute;
  border-radius: 50%;
  border: 3px solid white;
  background-color: ${props => props.background};
`;
