import React from "react";
import styled from "@emotion/styled";
import { HitScore, Time, PlayerNameInput } from "./elements/";
import { yellow } from "../../style/palette/palette";
import { regularFont } from "../../style/fonts/inedx";
import { PresenterProps } from "../../type/components/checkScoreType";

function Presenter(props: PresenterProps) {
  const { playerNameInput, resetGameState, handleOnChange, handleSubmit } =
    props;

  return (
    <Wrapper onSubmit={handleSubmit}>
      <HitScore />
      <Time />
      <PlayerNameInput
        playerNameInput={playerNameInput}
        handleOnChange={handleOnChange}
      />
      <ButtonWrapper>
        <TextButton
          className="text-button"
          color="white"
          type="button"
          onClick={resetGameState}
        >
          Try again
        </TextButton>
        <VerticalLine />
        <TextButton
          className="text-button"
          color={yellow}
          type="submit"
          onSubmit={handleSubmit}
        >
          Save Score
        </TextButton>
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
  justify-content: center;
  gap: 4%;
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

const TextButton = styled.button<{ color: string }>`
  background-color: white;
  background-color: inherit;
  color: ${props => props.color};
  font-size: 20px;
  ${regularFont}
`;
