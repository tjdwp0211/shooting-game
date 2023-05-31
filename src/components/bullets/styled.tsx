import React from "react";
import styled from "@emotion/styled";
import { gray, orange } from "../../style/palette/palette";

export const Container = styled.article`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RemainWrapper = styled.div`
  height: fit-content;
  display: flex;
  align-items: center;
  p:nth-of-type(2) {
    padding: 16% 0px 0px 0px;
  }
`;

export const ImgsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 4px;
  width: calc((0.5vw + 4px) * 30 - 4px);
  max-width: calc(16px * 30);
  min-width: calc(4px * 30);
`;

export const Img = styled.div`
  width: 0.5vw;
  max-width: 16px;
  min-width: 4px;
  height: 0.7vw;
  max-height: 24px;
  min-height: 8px;
  background-color: ${orange};
  border-radius: 100% 100% 0px 0px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    background-color: #fda000;
    border-radius: 100% 100% 0px 0px;
    border-bottom: 1px solid ${gray};
    top: 0px;
    left: 0;
  }
`;
