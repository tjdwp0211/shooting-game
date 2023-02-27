import React, { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <PlayerNameInput
        mainColor={black}
        inputState={{ value: searchValue }}
        handleOnChange={handleOnChange}
      />
      <button type="submit" onSubmit={handleSubmit}>
        search
      </button>
      <button type="button" onClick={defaultSorting}>
        default
      </button>
    </form>
  );
}

export default SearchPlayerName;
