import React from "react";
import styled from "@emotion/styled";

function Filter() {
  return (
    <FilterWrapper>
      <FilterWrapper>제일 긴 시간</FilterWrapper>
      <FilterWrapper>제일 짧은 시간</FilterWrapper>
      <FilterWrapper>제일 높은 점수</FilterWrapper>
      <FilterWrapper>제일 낮은 점수</FilterWrapper>
    </FilterWrapper>
  );
}

export default Filter;

const FilterWrapper = styled.div`
  background-color: black;
`;
