import './Filter.css'
import React, { useState } from 'react';

function Filter({onFilterChange}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const region = event.target.value;
    setSelectedOption(region);

    onFilterChange(region);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange} className='filter-dropdown'>
        <option value="">Region</option>
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
