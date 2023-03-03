import React from "react";
import styled from "@emotion/styled";
import { yellow } from "../../style/palette/palette";
import { PlayerNameInputProps } from "../../type/components/playerNameInputType";

function PlayerNameInput(props: PlayerNameInputProps) {
  const { mainColor, inputState, placeholder, handleOnChange } = props;
  return (
    <StyledInput
      mainColor={mainColor}
      blocking={inputState.blocking}
      placeholder={placeholder}
      value={inputState.value}
      onChange={handleOnChange}
    />
  );
}

export default PlayerNameInput;

const StyledInput = styled.input<{ blocking: boolean; mainColor: string }>`
  width: 204px;
  height: 32px;
  border: none;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0px;
  border-bottom-left-radius: 6px;
  border-left: 2px solid ${props => (props.blocking ? yellow : props.mainColor)};
  border-bottom: 2px solid
    ${props => (props.blocking ? yellow : props.mainColor)};
  padding-left: 12px;
  background-color: inherit;
  animation: ${props => props.blocking && "shake"} 0.2s;
  -webkit-animation: ${props => props.blocking && "shake"} 0.2s;
  &,
  &::placeholder {
    color: ${props => (props.blocking ? yellow : props.mainColor)};
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
