// src/App.jsx
import React, { useState } from 'react';
import ProfileCard from './components/Profile';
import profiles from './components/Profiledata';
import SearchBar from './components/Searchbar';
import FilterDropdown from './components/Filter';
import MapComponent from './components/Map';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import 'leaflet/dist/leaflet.css';


function App() {
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOption, setFilterOption] = useState('');
    const [filteredProfiles, setFilteredProfiles] = useState(profiles);

    const filterOptions = [...new Set(profiles.map(profile => profile.description))];
    
    const profiles = [
        { id: 1, name: 'John Doe', address: '123 Main St', contact: 'john@example.com', interests: ['Sports', 'Traveling'] },
        { id: 2, name: 'Jane Smith', address: '456 Park Ave', contact: 'jane@example.com', interests: ['Cooking', 'Reading'] },
      ];// e.g., filter by 'description' field

    const handleSearchChange = (term) => {
        setSearchTerm(term);
        filterProfiles(term, filterOption);
    };

    const handleFilterChange = (option) => {
        setFilterOption(option);
        filterProfiles(searchTerm, option);
    };

    const filterProfiles = (term, option) => {
        let updatedProfiles = profiles;

        if (term) {
            updatedProfiles = updatedProfiles.filter((profile) =>
                profile.name.toLowerCase().includes(term.toLowerCase()) ||
                profile.description.toLowerCase().includes(term.toLowerCase())
            );
        }

        if (option) {
            updatedProfiles = updatedProfiles.filter((profile) =>
                profile.description === option
            );
        }

        setFilteredProfiles(updatedProfiles);
    };

    const handleSummaryClick = (address) => {
        setSelectedAddress(address);
    };

    return (
        <div className="App">

            <Router>
              <Routes>
                <Route path="/" element={<ProfileList />} />
                <Route path="/profile/:id" element={<ProfileDetails />} />
              </Routes>
            </Router>

            {/* Search and Filter bar */}
            <div className="search-filter-bar" style={{ marginBottom: '20px' }}>
                <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                <FilterDropdown
                    filterOption={filterOption}
                    onFilterChange={handleFilterChange}
                    options={filterOptions}
                />
            </div>

            {/* Profile List */}
            <div className="profile-list">
                {filteredProfiles.map((profile, index) => (
                    <ProfileCard
                        key={index}
                        profile={profile}
                        onSummaryClick={handleSummaryClick}
                    />
                ))}
            </div>

            {/* Map Component */}
            {selectedAddress && (
                <div>
                    <h3>Map for: {selectedAddress}</h3>
                    <MapComponent address={selectedAddress} />
                </div>
            )}
        </div>
    );
}

export default App;
