import React from 'react';

import './date.styles.css';

const DateTile = props => {
    const changeDateToStr = (date) => {
        let newDate = date.toString().split("");
        let slicedDate = newDate.slice(0, 15);
        return slicedDate.join("");
    }

    const selectedDate = changeDateToStr(props.selected);
    const dayDate = changeDateToStr(props.day);

    return (
        props.blackedOut === true ? 
        <p className={`grid-item date-tile blacked-out ${props.selected == props.day ? 'selected' : ''}`} key={props.day} onClick={() => props.onTileClick(props.day)}>{props.day.getDate()}</p> 
        : 
        <p className={`grid-item date-tile ${selectedDate == dayDate ? 'selected' : ''}`} key={props.day} onClick={() => props.onTileClick(props.day)} >{props.day.getDate()}</p>
    );
}

export default DateTile;