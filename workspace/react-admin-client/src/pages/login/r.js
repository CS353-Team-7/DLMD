import fire from "../../api/commonFirebase";
import "antd/dist/antd.css";
import {Form, Input, Tooltip, Button, message} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import React,{Component,useState} from "react";


class  RegistrationForm extends Component{
     formItemLayout = {
        labelCol: {
            xs: {
                span: 24
            },
            sm: {
                span: 8
            }
        },
        wrapperCol: {
            xs: {
                span: 24
            },
            sm: {
                span: 16
            }
        }
    };
     tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0
            },
            sm: {
                span: 16,
                offset: 8
            }
        }
    };
     onFinish = (v) => {

        fire.auth().createUserWithEmailAndPassword(v.email,v.password).then((u)=>{
            message.success(v.email+" Create success!")
        }).catch((error)=>{
            message.error(error.message);
        });
    };
    render() {
        return(
            <Form
                {...this.formItemLayout}
                form={this.form}
                name="register"
                onFinish={this.onFinish}

                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!"
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!"
                        },{
                            min: 6,
                            message: "Please enter a length of at least 6 digits"
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!"
                        },
                        {
                            min: 6,
                            message: "Please enter a length of at least 6 digits"
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    "The two passwords that you entered do not match!"
                                );
                            }
                        })
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...this.tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

            </Form>
        )
    }
}
export default RegistrationForm;