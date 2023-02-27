import React from "react";

interface SelectBoxProps {
  view: boolean;
  options: { innerText: string; func: () => void }[];
  mainColor: string;
  children: React.ReactNode;
  handleOnClick: () => void;
}

interface OptionsProps {
  view: boolean;
  options: { innerText: string; func: () => void }[];
  mainColor: string;
}

interface ArrowButtonProps {
  view: boolean;
  mainColor: string;
  handleOnClick: () => void;
}

export type { SelectBoxProps, OptionsProps, ArrowButtonProps };
