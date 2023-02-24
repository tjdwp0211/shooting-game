import React from "react";

interface SelectBoxProps {
  view: boolean;
  options: string[];
  mainColor: string;
  children: React.ReactNode;
  handleOnClick: () => void;
}

interface OptionsProps {
  view: boolean;
  options: string[];
  mainColor: string;
}

interface ArrowButtonProps {
  view: boolean;
  mainColor: string;
  handleOnClick: () => void;
}

export type { SelectBoxProps, OptionsProps, ArrowButtonProps };
