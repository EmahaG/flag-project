import "./Search.css";
import { useState, useRef } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null)

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="search-container" onClick={handleContainerClick}>
      <label className={`search-label ${searchTerm || isFocused ? 'active' : ''}`}>
        Search for a country
      </label>
      <input
        ref={inputRef}
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
