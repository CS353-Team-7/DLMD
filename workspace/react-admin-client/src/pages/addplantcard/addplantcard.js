import React, {Component} from 'react';
import { Card ,Rate ,Divider,Tag,Input} from 'antd';

import {
    EnvironmentTwoTone,FileAddOutlined
} from '@ant-design/icons';
import Avatar from './uploadimg'
import './addplantcard.css'

const { Meta } = Card;
const desc = ['terrible', 'bad', 'aaa', 'good', 'wonderful'];


export default class AddPlantCard extends Component{
    state = {
        value: 3,
    };

    handleChange = value => {
        this.setState({ value });
    };
    render() {
        const { value } = this.state;

        return (

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<Avatar/>}
            >
                <Input placeholder="Plant name" />

                <Divider />
                <Input size="large" placeholder="large size" prefix={<EnvironmentTwoTone />} />
                <span>
                    <Rate tooltips={desc} onChange={this.handleChange} value={value} />

                </span>
            </Card>
        )
    }
}


