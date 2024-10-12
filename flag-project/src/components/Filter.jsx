import "./Filter.css";
import React, { useState } from "react";
import arrowDark from "../assets/arrow-down-black.svg";
import arrowLight from "../assets/arrow-down-white.svg";

function Filter({ onFilterChange, darkMode }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleChange = (event) => {
    const region = event.target.value;
    setSelectedOption(region);
    onFilterChange(region);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onFilterChange(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="filter-container">
      <label
        className={`filter-label ${
          selectedOption || isFocused ? "active" : ""
        }`}
      >
        Region
      </label>
      <div className="custom-dropdown" onClick={() => setIsOpen(!isOpen)}>
        <div className="selected-option">
          {selectedOption || " "}
        </div>
        <img
          src={darkMode ? arrowLight : arrowDark}
          alt={darkMode ? "Dropdown Arrow Dark" : "Dropdown Arrow Light"}
          className="dropdown-arrow"
        />
        {isOpen && (
          <div className="dropdown-options">
            {options.map((option) => (
              <div
                key={option}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
