import React from "react";

interface ChartDatas {
  type: "line";
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
}

interface ChartProps {
  size: string[];
  labelsForLineX: string[];
  chartDatas: ChartDatas[];
}

export type { ChartProps, ChartDatas };
