import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './drawer.css';
import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker, InputNumber, message} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import memoryUtils from "../../utils/memoryUtils";
import fire from "../../api/commonFirebase";
//a
const { Option } = Select;

export  default  class DrawerForm extends React.Component {
    state = {
        list: {},
        visible: false,

    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    componentDidMount() {
        this.queryInformation();
    }
     queryInformation ()
    {
        var user = memoryUtils.user.username.split(".")[0];
        console.log(user)
        var ref = fire.database().ref("userinformation/"+user);
        var value;
        ref.once("value",(data)=>{
            value= data.val();
            console.log(value)

            this.setState({list:value},()=>{
                console.log(this.state.list.telephone);
            })

        });






    };
    render() {

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not a valid email!',
                number: '${label} is not a valid number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };


        const onFinish = values => {
            console.log(values);
            var user = memoryUtils.user.username.split(".")[0];
            var vaddress = (values.address === undefined ? this.state.list.address : values.address)
            var  vage =  (values.age === undefined ? this.state.list.age:values.age)
            var vfavorite = (values.favorite === undefined ? this.state.list.favorite:values.favorite)
            var vintr = (values.introduction === undefined ? this.state.list.introduction:values.introduction)
            var vnationality = (values.nationality === undefined ? this.state.list.nationality:values.nationality)
            var vtelephone = (values.telephone === undefined ? this.state.list.telephone:values.telephone)
            console.log(vaddress+" "+vage+" "+vfavorite+" "+vintr+" "+vnationality+" "+vtelephone)
            fire.database().ref('userinformation/' + user).set({
                address:  vaddress,
                age: vage,
                favorite:vfavorite,
                introduction:vintr,
                nationality:vnationality,
                telephone:vtelephone

            });
            message.success("modify successfully !")
        };

        return (
            <>
                <Button type="primary" onClick={this.showDrawer}>
                    <SettingOutlined />Setting
                </Button>
                <Drawer
                    title="Modify personal information "
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >

                        </div>
                    }
                >
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={'telephone'} label="Telephone">
                            <Input  ref="text" defaultValue={this.state.list.telephone}  ></Input>
                        </Form.Item>
                        <Form.Item name={'address'} label="Address"  >
                            <Input defaultValue={this.state.list.address}/>
                        </Form.Item>
                        <Form.Item name={'age'} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                            <InputNumber defaultValue={this.state.list.age}/>
                        </Form.Item>
                        <Form.Item name={'favorite'} label="Favorite">
                            <Input defaultValue={this.state.list.favorite}/>
                        </Form.Item>
                        <Form.Item name={ 'nationality'} label="Nationality">
                            <Input.TextArea defaultValue={this.state.list.nationality}/>
                        </Form.Item>
                        <Form.Item name={'introduction'} label="Introduction">
                            <Input.TextArea defaultValue={this.state.list.introduction}/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Drawer>
            </>
        );
    }
}
