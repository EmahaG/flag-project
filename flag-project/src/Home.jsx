import Navbar from './components/Navbar.jsx'
import Search from './components/Search.jsx'
import Filter from './components/Filter.jsx'
import Card from './components/Card.jsx'; // Ensure path is correct

import React, {useState} from 'react';
import {useLoaderData} from 'react-router-dom';

export default function Home() {
    const countries = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    }

    const handleFilterChange = (region) => {
        setSelectedRegion(region);
    }

    const filteredCountries = countries.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchTerm);
        const matchesRegion = selectedRegion === '' || selectedRegion === 'All' || country.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    return (
        <div className="home">
            <div className="container">
                <div className="choice-container">
                    <Search onSearch={handleSearch} />
                    <Filter onFilterChange={handleFilterChange} />
                </div>
                <Card countries={filteredCountries} />
            </div>
        </div>
    )
};

