import React from "react";
import styled from "@emotion/styled";
import { HitScore, Time } from "./elements/";
import { yellow } from "../../style/palette/palette";
import { regularFont } from "../../style/fonts/inedx";
import { PresenterProps } from "../../type/components/checkScoreType";

function Presenter(props: PresenterProps) {
  const { resetGameState, handlePlayerName, savePlayerScore } = props;

  return (
    <Wrapper onSubmit={savePlayerScore}>
      <HitScore />
      <Time />
      <PlayerNameInput onChange={handlePlayerName} />
      <ButtonWrapper>
        <CloseButton
          className="text-button"
          color="white"
          onClick={resetGameState}
        >
          Try again
        </CloseButton>
        <VerticalLine />
        <CloseButton
          className="text-button"
          color={yellow}
          onSubmit={savePlayerScore}
        >
          Save Score
        </CloseButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Presenter;

const PlayerNameInput = styled.input`
  width: 100px;
  height: 24px;
`;

const Wrapper = styled.form`
  width: 100%;
  height: 90%;
  border-radius: 6px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const VerticalLine = styled.hr`
  width: 1px;
  height: 100%;
  background-color: white;
  border: none;
`;

const ButtonWrapper = styled.div`
  padding: 6px 12px 18px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CloseButton = styled.button<{ color: string }>`
  background-color: white;
  background-color: inherit;
  color: ${props => props.color};
  font-size: 16px;
  ${regularFont}
`;
