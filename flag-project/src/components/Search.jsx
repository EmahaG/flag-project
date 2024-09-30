import "./Search.css";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        className="search"
        placeholder="Search for a country"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
