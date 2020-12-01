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
                <h2 className='taskbar-heading'>These plants need your attention!</h2>
                <p>{dateStr}</p>
            </div>
            <div className='taskbar-body'>
                {
                    props.plantListWithData.map((plant, index) => (
                        <div className='taskbar-plant' key={index}>
                            <div className='plant-image' style={{ backgroundImage: `url(${plant.image_url})` }}></div>
                            <div className='plant-content'>
                                <h3 className='plant-title'>{plant.common_name}</h3>
                                <p className='plant-scientific'>{plant.scientific_name}</p>
                                <FontAwesomeIcon className='remove-plant' icon={faTimes} onClick={() => props.openCloseModal(plant)} />
                            </div>
                        </div>
                    ))
                }
            </div>
            {   props.removePlantClicked ?
                <div className='remove-plant-modal-container'>
                    <div className='remove-plant-modal'>
                        <div>
                            <h1 className='modal-warning'>WARNING</h1>
                            <h2 className='modal-secondary-warning'>You're about to remove PLANT_NAME from your plant list</h2>
                        </div>
                        <div>
                            <button className='remove-plant-btn' onClick={props.removeFromList}>Remove</button>
                            <button className='cancel-remove-btn' onClick={props.openCloseModal}>Cancel</button>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    );
}


export default Taskbar;