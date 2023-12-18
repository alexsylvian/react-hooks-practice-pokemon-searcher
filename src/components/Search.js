import React, { useState } from "react";

function Search({ setSearchInput }) {
  const [localSearchInput, setLocalSearchInput] = useState("")

  function handleSearch(e){
    const searched = e.target.value
    setLocalSearchInput(searched)
    setSearchInput(searched)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          type="text"
          placeholder="Search"
          value={localSearchInput}
          onChange={handleSearch}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
