import React, {Component} from 'react';
import {Badge, Descriptions, Divider} from "antd";
import memoryUtils from "../../utils/memoryUtils";
import DrawerForm from './informationdrawer'
import fire from "../../api/commonFirebase";


export default class PersonalInformation extends Component{
    state = {
        list: {},
    };
    componentDidMount() {
        this.queryInformation();
    }


    queryInformation () {
        var user = memoryUtils.user.username.split(".")[0];
        console.log(user)
        var ref = fire.database().ref("userinformation/" + user);
        var value;
        ref.once("value", (data) => {
            value = data.val();
            console.log(value)

            this.setState({list: value}, () => {
                console.log(this.state.list.telephone);
            })
        });
    };
    render() {
        const user = memoryUtils.user;
        return (

            <div style={{ background: '#ffffff',top: '-16px'  }}>
                <Divider />
                <Descriptions title=" &nbsp;  &nbsp; &nbsp;User Info" bordered>
                    <Descriptions.Item label="UserName">{user.username}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">{this.state.list.telephone}</Descriptions.Item>
                    <Descriptions.Item label="Remark">{this.state.list.remark}</Descriptions.Item>
                    <Descriptions.Item label="Address" span={2}>
                        {this.state.list.address}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                        <Badge status="processing" text="online" />
                    </Descriptions.Item>
                    <Descriptions.Item label="My number of plants">plants</Descriptions.Item>
                    <Descriptions.Item label="Age">{this.state.list.age}</Descriptions.Item>
                    <Descriptions.Item label="Favorite plant">{this.state.list.favorite}</Descriptions.Item>
                    <Descriptions.Item label=" Introduction">
                        {this.state.list.introduction}
                    </Descriptions.Item>
                </Descriptions>
                <DrawerForm/>
            </div>

        )
    }
}