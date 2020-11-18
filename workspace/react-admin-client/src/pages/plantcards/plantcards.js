import React, {Component} from 'react';
import { Card ,Rate ,Divider,Tag } from 'antd';
import plantTest from './image/plantTest.jpg';
import {
    EnvironmentTwoTone
} from '@ant-design/icons';

const { Meta } = Card;
const desc = ['terrible', 'bad', 'aaa', 'good', 'wonderful'];


export default class PlantCards extends Component{
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
                cover={<img alt="example" src={plantTest} />}
            >
                <Meta title="My Plant" description="This is description about plant" />
                <Divider />
                <Tag icon={< EnvironmentTwoTone  ></EnvironmentTwoTone>} color="processing">
                    corridor
                </Tag>
                <span>
                    <Rate tooltips={desc} onChange={this.handleChange} value={value} />

                </span>
            </Card>
        )
    }
}


