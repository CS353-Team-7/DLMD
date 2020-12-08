import React, {Component} from 'react';
import {Badge, Descriptions, Divider, message} from "antd";
import memoryUtils from "../../utils/memoryUtils";
import DrawerForm from './informationdrawer'
import fire from "../../api/commonFirebase";
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import plantTest from "../plantcards/image/erro.png";
import {Redirect, withRouter} from 'react-router-dom';

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();
const { confirm } = Modal;

export  class PersonalInformation extends Component{
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
        function showDeleteConfirm() {
            confirm({
                title: 'Delete the account',
                icon: <ExclamationCircleOutlined />,
                content: ' Are you sure you want to delete your account? Any information that contains you will disappear!',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    var user = fire.auth().currentUser
                    if(user == null)
                    {
                        user = fire.auth().signInWithEmailAndPassword(memoryUtils.user.username,memoryUtils.user.password)
                    }

                    user.delete().then(function() {
                        var user = memoryUtils.user.username;
                        var ref = fire.database().ref("users").orderByChild("ID").equalTo(user).once("value",(data)=> {

                            const value = data.val();
                            for (let id in value) {
                                fire.database().ref("users/" + id).remove()
                                fire.database().ref("plantcard/" + id).remove()
                            }
                        });
                        fire.database().ref("userinformation/"+memoryUtils.user.username.split('.')[0]).remove()
                        memoryUtils.user = {};
                        message.success("Delete succeed")
                    }).catch(function(error) {
                        // An error happened.
                    });

                   return <Redirect to = '/login/'/>

                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
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
                <Button className="site-button-ghost-wrapper"  danger onClick={showDeleteConfirm} type="dashed">
                    Delete the account
                </Button>
            </div>

        )
    }
}
export default withRouter(PersonalInformation);