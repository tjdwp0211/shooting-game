import React from "react";

interface SelectBoxProps {
  view: boolean;
  options: { innerText: string; func: () => void }[];
  mainColor: string;
  innerText: string;
  handleOpener: () => void;
}

interface OptionsProps {
  view: boolean;
  options: { innerText: string; func: () => void }[];
  mainColor: string;
  handleOpener: () => void;
  handlePlaceholder: (e: React.MouseEvent) => void;
}

interface ArrowButtonProps {
  view: boolean;
  mainColor: string;
  handleOpener: () => void;
}

export type { SelectBoxProps, OptionsProps, ArrowButtonProps };
