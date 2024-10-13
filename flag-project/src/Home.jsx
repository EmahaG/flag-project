import Navbar from './components/Navbar.jsx'
import Search from './components/Search.jsx'
import Filter from './components/Filter.jsx'
import Card from './components/Card.jsx'; // Ensure path is correct

import React, {useState, useEffect} from 'react';
import {useLoaderData} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export default function Home({darkMode}) {
    const countries = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (countries) {
            setLoading(false);
        }
    }, [countries]);

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
                    <Filter darkMode={darkMode} onFilterChange={handleFilterChange} />
                </div>
                {loading ? (
                    <div className="skeleton-loader">
                        <Skeleton count={4} height={260} width={260} />
                    </div>
                ) : (
                    <Card countries={filteredCountries} />
                )}
            </div>
        </div>
    )
};

