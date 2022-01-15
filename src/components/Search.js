import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({searchText, setSearchText}) => {
    return (
        <div className="search">
            <FaSearch className="search-icon" size="1.3em"/>
            <input type="text" placeholder="Type to search..." onChange={(e) => {
                setSearchText(e.target.value);
            }} />
        </div>
    )
}

export default Search
