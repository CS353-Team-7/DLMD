import React, {Component} from 'react';
import databaseAPI from "../../api/databaseAPI";

databaseAPI.queryCollectionPlant();
export default class WateringMainView extends Component{
    render() {
        return (
            <div>
                This is WateringMainView page
            </div>
        )
    }
}