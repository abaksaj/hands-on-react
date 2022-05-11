import React from "react";
import { useState } from "react";
import { SearchContainerPosition, SearchContainer, SearchInput } from "./SearchBarStyle";

function SearchBar({
  placeholder,
  inputValue,
  setInputValue,
  isSearchDisabled,
}) {
  return (
    <>
      <SearchContainerPosition>
        <SearchContainer>
          <SearchInput
            placeholder={placeholder}
            disabled={isSearchDisabled}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </SearchContainer>
      </SearchContainerPosition>
    </>
  );
}

export default SearchBar;
