import React from 'react';
import Calendar from '../../components/calendar/calendar.component';
import Search from '../../components/search/search.component';
import Taskbar from '../../components/taskbar/taskbar.component';

import './calendar-page.styles.css';

class CalendarPage extends React.Component {
    constructor() {
        super();

        this.state = {
            plantList: []
        };
    }



    render() {
        return (
            <div className='calendar-page'>
                <h1 className='calendar-title'></h1>
                <Calendar />
                <Search />
            </div>
        );
    }
}

export default CalendarPage;