import React from 'react';

import { ReactComponent as WateringCan } from '../../assets/watering-can.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './taskbar.styles.css';

const Taskbar = props => {
    let date = props.selectedDate.toString().split("");
    let newDate = date.slice(0, 15);
    let dateStr = newDate.join("");
    return (
        <div className='taskbar'>
            <div className='taskbar-header'>
                <h2>These plants need your attention!</h2>
                <p>{dateStr}</p>
            </div>
            <div className='taskbar-body'>
                <div className='taskbar-plant'>
                    <div className='plant-image'></div>
                    <div className='plant-content'>
                        <h3 className='plant-title'>Daisy</h3>
                        <p className='plant-scientific'>Nerd</p>
                        <FontAwesomeIcon className='remove-plant' icon={faTimes} onClick={props.openCloseModal} />
                        <WateringCan className='plant-watering' />
                    </div>
                </div>
            </div>
            {   props.removePlantClicked ?
                <div className='remove-plant-modal-container'>
                    <div className='remove-plant-modal'>
                        <h1>WARNING</h1>
                        <h2>You're about to remove PLANT_NAME from your plant list</h2>
                        <button className='remove-plant-btn'>Remove</button>
                        <button className='cancel-remove-btn' onClick={props.openCloseModal}>Cancel</button>
                    </div>
                </div>
                : null
            }
        </div>
    );
}


export default Taskbar;