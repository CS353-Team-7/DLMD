import React from 'react';

import './search-results.styles.css';

const SearchResult = ({ plant }) => {
    return (
        <div className='search-result'>
            <div className='result-image' style={{ backgroundImage: `url(${plant.image_url})` }}></div>
            <div className='result-content'>
                <div className='result-content-header'>
                    <h2>{plant.common_name}</h2>
                    <h3>{plant.scientific_name}</h3>
                </div>
                <div className='result-content-footer'>
                    <button className='add-to-list-btn'>Add to List</button>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;