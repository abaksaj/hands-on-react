import React from "react";
import { SearchContainerPosition, SearchContainer, SearchInput } from "./SearchBarStyle";

function SearchBar({
  value,
  placeholder,
  isSearchDisabled,
  handleValues,
  keyVal
}) {

  
  return (
    <>
      <SearchContainerPosition>
        <SearchContainer>
          <SearchInput
            value={value}
            placeholder={placeholder}
            disabled={isSearchDisabled}
            onChange={(event) =>handleValues(keyVal, event.target.value)}
          />
        </SearchContainer>
      </SearchContainerPosition>
    </>
  );
}

export default SearchBar;