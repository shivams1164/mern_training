// src/components/SearchBox.js

import React from 'react';

const SearchBox = () => {
    return (
        <div className="search-box-container">
            <input type="text" placeholder="Search Product ...." className="search-input" />
            <button className="search-button">Search</button>
        </div>
    );
}

export default SearchBox;
