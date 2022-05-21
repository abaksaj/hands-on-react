import React from "react";
import { SearchContainerPosition, 
        SearchContainer, 
        SearchInput 
      } from "./SearchBarStyle";

function SearchBar({
  value,
  placeholder,
  isSearch,
  handleValues,
  loading
}) {

  return (
    <>
      <SearchContainerPosition>
        <SearchContainer>
          <SearchInput
            value={value}
            placeholder={placeholder}
            disabled={loading ? !isSearch :isSearch}
            onChange={(event) =>handleValues(event.target.value)}/>
        </SearchContainer>
      </SearchContainerPosition>
    </>
  );
}

export default SearchBar;