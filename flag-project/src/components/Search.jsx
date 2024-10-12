import "./Search.css";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <label className={`search-label ${searchTerm || isFocused ? 'active' : ''}`}>
        Search for a country
      </label>
      <input
        type="text"
        className="search"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)} 
      />
    </div>
  );
};

export default Search;
