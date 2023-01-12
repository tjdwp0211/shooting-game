import React from "react";
import { Roboto } from "@next/font/google";

const bold = Roboto({
  weight: "700",
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--roboto-bold",
  fallback: ["system-ui"],
});

const medium = Roboto({
  weight: "500",
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--roboto-medium",
  fallback: ["system-ui"],
});

const regular = Roboto({
  weight: "400",
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--roboto-regular",
  fallback: ["system-ui"],
});

const light = Roboto({
  weight: "300",
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--roboto-light",
  fallback: ["system-ui"],
});

const thin = Roboto({
  weight: "100",
  display: "fallback",
  subsets: ["latin"],
  style: "normal",
  variable: "--roboto-thin",
  fallback: ["system-ui"],
});

export {
  bold as robotoBold,
  medium as robotoMedium,
  regular as robotoRegular,
  light as robotoLight,
  thin as robotoThin,
};
