// src/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search for user, location, etc..."
            value={John}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
};

export default SearchBar;
