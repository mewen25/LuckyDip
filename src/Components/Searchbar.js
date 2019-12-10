import React, { useState } from "react";
import SearchInput, { createFilter } from "react-search-input";

import "./searchBar.css";

function Searchbar() {
  const [value, setValue] = useState(null);

  const handleChange = e => {
    setValue(value);
  };

  return (
    <div className="search">
      <SearchInput
        className="search-input"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default Searchbar;
