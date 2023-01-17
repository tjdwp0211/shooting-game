import React from "react";
import styled from "@emotion/styled";

interface LineProps {
  rotation: boolean;
}

function Line({ rotation }: LineProps) {
  return <LineElement rotation={rotation}></LineElement>;
}

export default Line;

const LineElement = styled.line<{ rotation: boolean }>`
  background-color: white;
  width: ${(props) => (props.rotation ? "3px" : "100%")};
  height: ${(props) => (props.rotation ? "100%" : "3px")};
  position: absolute;
`;