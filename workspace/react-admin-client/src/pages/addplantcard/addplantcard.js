import React, {Component} from 'react';
import {Form, Input, InputNumber, Button, Card, message} from 'antd';
import PicturesWall from './uploadimg'
import memoryUtils from "../../utils/memoryUtils";
const {Item} = Form



export default class AddPlantCard extends Component{
    constructor(props) {
        super(props);
        this.pw = React.createRef()

    }

    postUserData(values)
    {

        console.log(values)
        //Assuming userID is already added?
        var userURL = "https://don-t-let-me-die.firebaseio.com/plantcard.json/" + memoryUtils.user.username;


        fetch("https://don-t-let-me-die.firebaseio.com/plantcard.json", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //Could also just set an ID as an array in the DB, add the plants to each one (more efficient)
                ID: memoryUtils.user.username, // REPLACE "test" WITH userID
                plantName: values.plantname,
                Note:values.note,
                Location:values.location,
                url:values.url
            })
        })
    }
    render() {
        const layout = {
            labelCol: {
                span:2,
            },
            wrapperCol: {
                span: 5,
            },
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
        const onFinish = (values) => {

            values.url = this.pw.current.getImgUrl()
            this.postUserData(values)
            message.success("successful")
        };
        return (
            <Card >
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['plantname']}
                        label="Plant name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['note']}
                        label="Note"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['location']}
                        label="Location"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>



                    <Form.Item
                        name={['picture']}
                       label="Picture:"

                    >
                        <PicturesWall ref={this.pw}/>
                    </Form.Item>


                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}


