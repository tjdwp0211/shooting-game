import React from "react";
import { SerializedStyles } from "@emotion/react";

interface TextProps {
  size: number;
  weight: SerializedStyles;
  children: React.ReactNode;
  className?: string;
}

export type { TextProps };
