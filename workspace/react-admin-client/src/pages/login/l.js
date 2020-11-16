import {Form, Input, Drawer, Button, Checkbox, message} from 'antd';
import React,{Component} from "react";
import DrawerForm from './registrationDrawer'
import RegistrationDrawer from "./registrationDrawer";
import fire from "../../api/commonFirebase";
import { withRouter } from 'react-router-dom';
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
class  Demo extends Component{
     layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
     onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
     onFinish = (e) => {
         withRouter(Demo)
         fire.auth().signInWithEmailAndPassword(e.username,e.password).then((u)=>{
             memoryUtils.user = e//Store the username in memory
             storageUtils.saveUser(e)//store local
             message.success("success!"+ memoryUtils.user.username);


             this.props.history.replace('/Personal');
         }).catch((error)=>{
             message.error("username or password erro :"+error)
         })
    };
    render(){
        return(
            <Form
                {...this.layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...this.tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <> </>
                    <DrawerForm/>
                </Form.Item>

            </Form>
        )
    }
}

export default withRouter(Demo);

