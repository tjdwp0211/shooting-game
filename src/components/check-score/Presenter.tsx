import React from "react";
import styled from "@emotion/styled";
import { HitScore, Time, PlayerNameInput } from "./elements/";
import { yellow } from "../../style/palette/palette";
import { regularFont } from "../../style/fonts/inedx";
import { PresenterProps } from "../../type/components/checkScoreType";

function Presenter(props: PresenterProps) {
  const {
    playerNameInput,
    setPlayerNameInput,
    resetGameState,
    savePlayerScore,
  } = props;

  const handleSubmit = (
    e: React.FormEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => {
    e.preventDefault();
    if (playerNameInput.value.length <= 1)
      setPlayerNameInput(prev => ({ ...prev, blocking: true }));
    else if (!playerNameInput.blocking) savePlayerScore();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <HitScore />
      <Time />
      <PlayerNameInput
        playerNameInput={playerNameInput}
        setPlayerNameInput={setPlayerNameInput}
      />
      <ButtonWrapper>
        <CloseButton
          className="text-button"
          color="white"
          type="button"
          onClick={resetGameState}
        >
          Try again
        </CloseButton>
        <VerticalLine />
        <CloseButton
          className="text-button"
          color={yellow}
          type="submit"
          onSubmit={handleSubmit}
        >
          Save Score
        </CloseButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Presenter;

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
