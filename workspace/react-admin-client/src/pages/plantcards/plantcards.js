import React, {Component} from 'react';
import { Card ,Rate ,Divider } from 'antd';

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
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="My Plant" description="www.Test.com" />
                <Divider />
                <span>
                    <Rate tooltips={desc} onChange={this.handleChange} value={value} />

                </span>
            </Card>
        )
    }
}


