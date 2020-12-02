import React from 'react';

import Navigation from '../navigation/navigation.component';
import DateTile from '../date/date.component';
import DateHeader from '../date-header/date-header.component';
import Taskbar from '../taskbar/taskbar.component';

import fire from "../../api/commonFirebase";
import memoryUtils from "../../utils/memoryUtils";

import './calendar.styles.css';


class Calendar extends React.Component {
    date = new Date();
    daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    constructor(props) {
        super(props);

        this.state = {
            date: this.date.getDate(),
            day: this.date.getDay(),
            days: [],
            month: this.date.getMonth(),
            year: this.date.getFullYear(),
            currentDays: 0,
            prevDays: 0,
            selectedDate: {},
            removePlantClicked: false,
            data: [],
            plantList: [],
            plantListWithData: [],
            plantListForDay: [],
            plantToRemove: {}
        };
    }

    async componentDidMount() {
        this.setState({ selectedDate: new Date(), days: this.populateDaysInMonth(this.state.month, this.state.year) });
        let plantListWithData = [];

        await this.getPlantData();
        await this.queryCollectionPlant();

        await this.state.plantList.forEach(plant => {
            this.state.data.forEach(({ common_name, scientific_name, image_url, average_precipitation }) => {
                if (plant.UserPlant.toLowerCase() == common_name.toLowerCase()) {
                    let newObj = {
                        id: plant._ID,
                        common_name,
                        scientific_name,
                        image_url,
                        average_precipitation,
                        isWatered: false
                    };
                    plantListWithData.push(newObj);
                }
            });
        });

        await this.setState({ plantListWithData });
    }

    getWateringDays = (index, day) => {
        const d = new Date();
        if (day.getTime() >= d.getTime()) {
            const plantsForDay = [];
            this.state.plantListWithData.forEach(plant => {
                if (index % Math.round(plant.average_precipitation / 400) == 0) {
                    plantsForDay.push(plant);
                } 
            });

            return plantsForDay;
        } else {
            return [];
        }
    }

    getPlantData = () => {
        fetch("https://don-t-let-me-die.firebaseio.com/data.json")
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .catch(error => console.log(error));
    }


    getDaysInMonth = (month, year) => {
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return days;
    }


    populateDaysInMonth = (month, year) => {
        let prevMonth = month-1;
        let prevYear = year;
        let days = this.getDaysInMonth(month, year);

        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }

        let prevMonthDays = this.getDaysInMonth(prevMonth, prevYear);

        let start = days[0];
        this.setState({ currentDays: days.length, prevDays: start.getDay() });

        if (start.getDay() !== 0) {
            for (let i = 0; i < start.getDay(); i++) {
                days.unshift(prevMonthDays[prevMonthDays.length-1-i]);
            }
        }

        let difference = 42-days.length;
        let date = new Date(year, month+1, 1);

        for (let i = 0; i < difference; i++ ) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return days;
    }


    onMonthChange = async value => {
        console.log(this.state.prevDays);

        if (value == 'prev') {
            let newDate = new Date();
            if (this.state.month === newDate.getMonth() && this.state.year === newDate.getFullYear()) {
                return;
            }

            await this.setState({ month: this.state.month - 1 });
            if (this.state.month < 0) {
                await this.setState({ month: 11, year: this.state.year - 1 });
            }
        } else {
            await this.setState({ month: this.state.month + 1 });
            if (this.state.month > 11) {
                await this.setState({ month: 0, year: this.state.year + 1 });
            }
        }

        this.setState({ days: this.populateDaysInMonth(this.state.month, this.state.year) });
    }


    onTileClick = (selectedDate, plants) => {
        this.setState({ selectedDate, plantListForDay: plants });
    }

    
    openCloseModal = (plant) => {
        this.setState({ removePlantClicked: !this.state.removePlantClicked, plantToRemove: plant });
    }

    removeFromList = () => {
        const user = memoryUtils.user.username;
        fire.database().ref(`users/${this.state.plantToRemove.id}`).remove()
        .catch(error => alert(error));
        alert(`Removed ${this.state.plantToRemove.common_name} from your list.`);
        this.setState({ plantToRemove: {}, removePlantClicked: !this.state.removePlantClicked });
        window.location.reload(false); 
    }
    
    queryCollectionPlant = async () => {
        const user = memoryUtils.user.username;
        await fire.database().ref("users").orderByChild("ID").equalTo(user).once("value", (data) => {
            const value = data.val();
            const valueList = [];
            for(let id in value) {
                valueList.push({
                    _ID:id,
                    ID:value[id].ID,
                    UserPlant:value[id].UserPlant
                });
            }
            this.setState({ plantList: valueList });
        });
    }


    render() {
        return(
            <div className='calendar-section'>
                <div className='calendar-container'>
                    <Navigation month={this.state.month} year={this.state.year} onMonthChange={this.onMonthChange}/>
                    <div className='grid-container'>
                        {
                            this.daysOfWeek.map(day => (
                                <DateHeader day={day} key={day} />
                            ))
                        }

                        {
                            this.state.days.map((day, index) => (
                                index < this.state.prevDays || index >= this.state.prevDays + this.state.currentDays ? 
                                <DateTile 
                                    day={day} 
                                    blackedOut={true} 
                                    key={index} 
                                    onTileClick={this.onTileClick} 
                                    selected={this.state.selectedDate} 
                                    getWateringDays={() => this.getWateringDays(index, day)}
                                /> 
                                : <DateTile 
                                    day={day} 
                                    key={index} 
                                    onTileClick={this.onTileClick} 
                                    selected={this.state.selectedDate} 
                                    getWateringDays={() => this.getWateringDays(index, day)}
                                />
                                // <DateTile day={day} key={index} />
                            ))
                        }
                    </div>
                </div>
                <Taskbar 
                    selectedDate={this.state.selectedDate} 
                    openCloseModal={this.openCloseModal} 
                    removePlantClicked={this.state.removePlantClicked} 
                    removeFromList={this.removeFromList}
                    plantListWithData={this.state.plantListForDay}
                />
            </div>
        );
    }
};

export default Calendar;