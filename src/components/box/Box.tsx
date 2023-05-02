import React from "react";
import * as S from "./styled";
interface BoxProps {
  children: React.ReactNode;
  bgColor: string;
}

function Box({ children, bgColor }: BoxProps) {
  return <S.BoxContainer bgColor={bgColor}>{children}</S.BoxContainer>;
}

export default Box;
