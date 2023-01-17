import React from "react";
import { Circle, Line, Wrapper } from "./elements/";

interface PresenterProps {
  handleHit: () => void;
}

function Presenter({ handleHit }: PresenterProps) {
  return (
    <Wrapper handleHit={handleHit}>
      <Circle radius={100}></Circle>
      <Circle radius={70}></Circle>
      <Circle radius={40}></Circle>
      <Line rotation={true} />
      <Line rotation={false} />
    </Wrapper>
  );
}

export default Presenter;
