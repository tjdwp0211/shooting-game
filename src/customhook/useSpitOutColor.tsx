import React from "react";
import { blue, lightBlack, red, white, yellow } from "../style/palette/palette";

function useSpitOutColor(point: number) {
  if (point === 2) return white + "bf";
  if (point === 4) return lightBlack + "bf";
  if (point === 6) return blue + "bf";
  if (point === 8) return red + "bf";
  if (point === 10) return yellow + "bf";
}

export default useSpitOutColor;
