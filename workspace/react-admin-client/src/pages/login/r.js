import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Tooltip, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const formItemLayout = {
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
const tailFormItemLayout = {
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

const  RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };


    return (
        <Form
            {...formItemLayout}
    form={form}
    name="register"
    onFinish={onFinish}

    scrollToFirstError
    >
    <Form.Item
        name="nickname"
    label={
        <span>
        UserName&nbsp;
    <Tooltip title="This is an important proof of login！ ">
        <QuestionCircleOutlined />
        </Tooltip>
        </span>
}
    rules={[
                {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true
                }
                ]}
        >
        <Input />
        </Form.Item>

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
            }
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
    <Input.Password />
    </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>

        </Form>

);
};
export default RegistrationForm;