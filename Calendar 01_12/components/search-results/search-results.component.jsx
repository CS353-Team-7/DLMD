import React from 'react';

import './search-results.styles.css';

const SearchResult = ({ plant, addToList }) => {
    return (
        <div className='search-result'>
            <div className='result-image' style={{ backgroundImage: `url(${plant.image_url})` }}></div>
            <div className='result-content'>
                <div className='result-content-header'>
                    <h2 className='result-common'>{plant.common_name}</h2>
                    <h3 className='result-scientific'>{plant.scientific_name}</h3>
                </div>
                <div className='result-content-footer'>
                    <button className='add-to-list-btn' onClick={() => addToList(plant.common_name)}>Add to List</button>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;