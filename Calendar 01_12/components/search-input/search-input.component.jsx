import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

import './search-input.styles.css';

const SearchInput = ({ value, handleChange, clicked, handleClick, handleSubmit, clearText }) => {
    return (
        <div className='search-input'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <label className={`input-label ${clicked === true ? 'bigger' : ''}`} onClick={handleClick}>
                    <FontAwesomeIcon className='search-icon' icon={faSearch} />
                    <input type='text' name='plant-search' value={value} onChange={handleChange} />
                    {
                        value.length ? <FontAwesomeIcon className='clear-text-icon' icon={faEraser} onClick={clearText} /> : <div className='hidden-clear-div'></div>
                    }
                </label>
            </form>
        </div>
    );
}

export default SearchInput;