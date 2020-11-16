import React, {Component} from 'react';
/*

* */


import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule'
export default class PlantCalendar extends Component{
    render() {
        return (
            <div>

                <ScheduleComponent>
                    <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
                </ScheduleComponent>
            </div>
        )
    }
}