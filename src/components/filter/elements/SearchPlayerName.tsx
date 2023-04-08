import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { black } from "../../../style/palette/palette";
import PlayerNameInput from "../../input/PlayerNameInput";
import { SearchPlayerNameProps } from "../../../type/components/filterType";

function SearchPlayerName(props: SearchPlayerNameProps) {
  const { defaultSorting, drawByPlayerName } = props;
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    drawByPlayerName(searchValue);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <PlayerNameInput
        mainColor={black}
        inputState={{ value: searchValue }}
        placeholder={"Player name"}
        handleOnChange={handleOnChange}
      />
      <SearchButton type="submit" onSubmit={handleSubmit}>
        <Image width={20} height={20} alt="search" src={"/search-icon.webp"} />
      </SearchButton>
      <ResetButton type="button" onClick={defaultSorting}>
        <Image width={20} height={20} alt="search" src={"/reset-icon.webp"} />
      </ResetButton>
    </FormWrapper>
  );
}

export default SearchPlayerName;

const FormWrapper = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 820px) {
    img {
      width: 12px;
      height: 12px;
    }
    input,
    button {
      height: 24px;
    }
    @media (width < 640px) {
      input {
        width: 50%;
      }
    }
  }
`;

const SearchButton = styled.button`
  height: 32px;
  background-color: inherit;
  border-bottom: 2px solid ${black};
  border-right: 2px solid ${black};
`;

const ResetButton = styled.button`
  height: 32px;
  background-color: inherit;
  border-bottom: 2px solid ${black};
`;
