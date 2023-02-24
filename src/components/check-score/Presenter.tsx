import React from "react";
import styled from "@emotion/styled";
import Text from "../text/Text";
import { HitScore, Time, PlayerNameInput } from "./elements/";
import { white, yellow } from "../../style/palette/palette";
import { boldFont, regularFont } from "../../style/fonts/inedx";
import { PresenterProps } from "../../type/components/checkScoreType";

function Presenter(props: PresenterProps) {
  const { inputState, resetGameState, handleOnChange, handleSubmit } = props;

  return (
    <Wrapper onSubmit={handleSubmit}>
      <HitScore />
      <Time />
      <InputWrapper blocking={inputState.blocking}>
        <Text size={20} weight={boldFont}>
          Must be between 2 and 6 in length
        </Text>
        <PlayerNameInput
          mainColor={white}
          inputState={inputState}
          handleOnChange={handleOnChange}
        />
      </InputWrapper>
      <ButtonsWrapper>
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
      </ButtonsWrapper>
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

const InputWrapper = styled.article<{ blocking: boolean }>`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  p {
    visibility: ${props => (props.blocking ? "visible" : "hidden")};
    color: ${yellow};
    margin: 0;
  }
`;

const ButtonsWrapper = styled.div`
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

const VerticalLine = styled.hr`
  width: 1px;
  height: 100%;
  background-color: white;
  border: none;
`;
