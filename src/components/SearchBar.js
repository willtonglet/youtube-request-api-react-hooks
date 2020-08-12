import React, { useState } from "react";

import SearchBarStyles from "../styles/SearchBar";

import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <SearchBarStyles>
      <form onSubmit={handleSubmit}>
        <FiSearch size={18} />
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter to search a video"
          className="input"
        />
      </form>
    </SearchBarStyles>
  );
};

export default SearchBar;
