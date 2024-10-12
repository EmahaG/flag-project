import './Filter.css'
import React, { useState } from 'react';

function Filter({onFilterChange}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event) => {
    const region = event.target.value;
    setSelectedOption(region);
    onFilterChange(region);
  };

  return (
    <div className="filter-container">
      <label className={`filter-label ${selectedOption || isFocused ? 'active' : ''}`}>
        Region
      </label>
      <select value={selectedOption} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className='filter-dropdown'>
        <option value=""> </option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
