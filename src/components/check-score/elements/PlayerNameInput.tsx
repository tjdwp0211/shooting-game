import React from "react";
import styled from "@emotion/styled";
import { PlayerNameInputProps } from "../../../type/components/checkScoreType";
import { white, yellow } from "../../../style/palette/palette";
import { boldFont } from "../../../style/fonts/inedx";
import Text from "../../text/Text";

function PlayerNameInput({
  playerNameInput,
  setPlayerNameInput,
}: PlayerNameInputProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: eventValue } = e.target;
    if (eventValue.length <= 6)
      setPlayerNameInput(prev => ({
        ...prev,
        value: eventValue,
        blocking: false,
      }));
    else
      setPlayerNameInput(prev => ({
        ...prev,
        value: eventValue,
        blocking: true,
      }));
  };

  return (
    <Wrapper blocking={playerNameInput.blocking}>
      <Text size={20} weight={boldFont}>
        Must be between 2 and 6 in length
      </Text>
      <StyledInput
        blocking={playerNameInput.blocking}
        placeholder="Save score as your name"
        value={playerNameInput.value}
        onChange={handleOnChange}
      />
    </Wrapper>
  );
}

export default PlayerNameInput;

const Wrapper = styled.div<{ blocking: boolean }>`
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

const StyledInput = styled.input<{ blocking: boolean }>`
  width: 204px;
  height: 32px;
  border: none;
  border-bottom-left-radius: 6px;
  border-left: 2px solid ${props => (props.blocking ? yellow : white)};
  border-bottom: 2px solid ${props => (props.blocking ? yellow : white)};
  padding-left: 12px;
  background-color: inherit;
  animation: ${props => props.blocking && "shake"} 0.2s;
  -webkit-animation: ${props => props.blocking && "shake"} 0.2s;
  &,
  &::placeholder {
    color: ${props => (props.blocking ? yellow : white)};
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
  @-webkit-keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;
