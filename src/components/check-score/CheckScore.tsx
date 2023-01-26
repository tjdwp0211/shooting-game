import React from "react";
import styled from "@emotion/styled";
import { HitScore, Time } from "./elements/";
import { useDispatch } from "react-redux";
import { clearGameState } from "../../redux/root";
import { CheckScoreProps } from "../../type/components/checkScoreType";
import { boldFont } from "../../style/fonts/inedx";
import { yellow } from "../../style/palette/palette";

function CheckScore({ setGameProgress }: CheckScoreProps) {
  const dispatch = useDispatch();

  const resetGameState = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(clearGameState());
    setGameProgress((prev) => ({ ...prev, start: false, checkScore: false }));
  };

  const stopBubbling = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <Wrapper onClick={stopBubbling}>
      <HitScore />
      <Time />
      <ButtonWrapper>
        <CloseButton className="text-button" color="white">
          Save Score
        </CloseButton>
        <VerticalLine />
        <CloseButton
          className="text-button"
          color={yellow}
          onClick={resetGameState}
        >
          Try again
        </CloseButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default CheckScore;

const Wrapper = styled.article`
  width: 100%;
  height: 90%;
  border-radius: 6px;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (max-height: 400px) {
    justify-content: flex-start;
    gap: 8px;
  }
`;

const VerticalLine = styled.hr`
  width: 1px;
  height: 100%;
  background-color: white;
  border: none;
`;

const ButtonWrapper = styled.form`
  padding: 6px 12px 18px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CloseButton = styled.button<{ color: string }>`
  background-color: white;
  background-color: inherit;
  color: ${(props) => props.color};
  font-size: 16px;
  ${boldFont}
`;
