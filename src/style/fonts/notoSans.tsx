import React from "react";
import { Noto_Sans_KR } from "@next/font/google";

const bold = Noto_Sans_KR({
  weight: "700",
  display: "fallback",
  subsets: ["korean"],
  style: "normal",
  variable: "--noto-sans_KR-bold",
  fallback: ["system-ui"],
});

const medium = Noto_Sans_KR({
  weight: "500",
  display: "fallback",
  subsets: ["korean"],
  style: "normal",
  variable: "--noto-sans_KR-medium",
  fallback: ["system-ui"],
});

const regular = Noto_Sans_KR({
  weight: "400",
  display: "fallback",
  subsets: ["korean"],
  style: "normal",
  variable: "--noto-sans_KR-regular",
  fallback: ["system-ui"],
});

const light = Noto_Sans_KR({
  weight: "300",
  display: "fallback",
  subsets: ["korean"],
  style: "normal",
  variable: "--noto-sans_KR-light",
  fallback: ["system-ui"],
});

const thin = Noto_Sans_KR({
  weight: "100",
  display: "fallback",
  subsets: ["korean"],
  style: "normal",
  variable: "--noto-sans_KR-thin",
  fallback: ["system-ui"],
});

export {
  bold as notoSansKrBold,
  medium as notoSansKrMedium,
  regular as notoSansKrRegular,
  light as notoSansKrLight,
  thin as notoSansKrThin,
};
