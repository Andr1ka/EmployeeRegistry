import React from 'react';
import './styles/SearchBar.css'; 

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            className="search-bar" 
        />
    );
};

export default SearchBar;