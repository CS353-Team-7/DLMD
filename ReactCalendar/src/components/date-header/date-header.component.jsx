import React from 'react';

import './date-header.styles.css';

const DateHeader = props => (
    <p className='grid-item date-header'>{props.day}</p>
);

export default DateHeader;