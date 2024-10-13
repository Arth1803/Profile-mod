// src/Filter.jsx
import React from 'react';

const FilterDropdown = ({ filterOption, onFilterChange, options }) => {
    return (
        <select
            value={filterOption}
            onChange={(e) => onFilterChange(e.target.value)}
        >
            <option value="">Filter by...</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default FilterDropdown;
