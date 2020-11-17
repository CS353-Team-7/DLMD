import React, {Component} from 'react';
import {Badge, Descriptions, Divider} from "antd";
import memoryUtils from "../../utils/memoryUtils";



export default class PersonalInformation extends Component{
    render() {
        const user = memoryUtils.user;
        return (
            <div style={{ background: '#ffffff',top: '-16px'  }}>
                <Divider />
                <Descriptions title=" &nbsp;  &nbsp; &nbsp;User Info" bordered>
                    <Descriptions.Item label="UserName">{user.username}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">Prepaid</Descriptions.Item>
                    
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address" span={2}>
                        MAYNOOTH UNIVERSITY MAYNOOTH CO. KILDARE
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                        <Badge status="processing" text="online" />
                    </Descriptions.Item>
                    <Descriptions.Item label="My number of plants">plants</Descriptions.Item>
                    <Descriptions.Item label="Favorite sport">Watering</Descriptions.Item>
                    <Descriptions.Item label="Favorite plant">Rose</Descriptions.Item>
                    <Descriptions.Item label=" Info">
                        Test
                        <br />
                        Test
                        <br />
                        Test
                        <br />
                        Test
                        <br />
                        Test
                        <br />
                        Test<br />
                    </Descriptions.Item>
                </Descriptions>
            </div>

        )
    }
}