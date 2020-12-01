import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './navigation.styles.css';
//asdaa

const Navigation = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[props.month];

    return (
        <div className='navigation'>
            <span className='month-year'>{month} {props.year}</span>
            <FontAwesomeIcon className='nav-button' onClick={() => props.onMonthChange('prev')} icon={faChevronUp} />
            <FontAwesomeIcon className='nav-button' onClick={() => props.onMonthChange('next')} icon={faChevronDown} />
            {/* <button className='nav-button' value='up' onClick={props.onMonthChange}></button>
            <button className='nav-button' value='down' onClick={props.onMonthChange}>&#8595;</button> */}
        </div>
    ); 
};


export default Navigation;