import React from "react";
import styled from "@emotion/styled";
import { LineProps } from "../../../type/targetBoardType";

function Line({ rotation }: LineProps) {
  return <LineElement rotation={rotation}></LineElement>;
}

export default Line;

const LineElement = styled.hr<{ rotation: boolean }>`
  background-color: white;
  width: ${(props) => (props.rotation ? "3px" : "100%")};
  height: ${(props) => (props.rotation ? "100%" : "3px")};
  position: absolute;
  border: none;
`;
