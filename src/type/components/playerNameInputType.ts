import React from "react";

interface PlayerName {
  value: string;
  blocking?: boolean;
}

interface PlayerNameInputProps {
  mainColor: string;
  inputState: PlayerName;
  placeholder: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { PlayerName, PlayerNameInputProps };
