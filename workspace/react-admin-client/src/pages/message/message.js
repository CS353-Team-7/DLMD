import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React,{Component} from "react";
import memoryUtils from "../../utils/memoryUtils";
import {formateDate} from "../../utils/dateUtils";
import fire from "../../api/commonFirebase";
import plantTest from "../plantcards/image/erro.png";
const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);

export  default class Message extends Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    };
    postUserData(input)
    {
        console.log()
        //Assuming userID is already added?
        var userURL = "https://don-t-let-me-die.firebaseio.com/comments.json/";
        fetch("https://don-t-let-me-die.firebaseio.com/comments.json", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //Could also just set an ID as an array in the DB, add the plants to each one (more efficient)
                ID: input.author, // REPLACE "test" WITH userID
                avatar: 'https://firebasestorage.googleapis.com/v0/b/don-t-let-me-die.appspot.com/o/images%2F1b081de2-49be-49a4-9d49-416a2929ab54?alt=media&token=09e858ca-9216-4f18-9c43-f37c9aa238d5',
                author:input.author,
                content:input.content,
                datetime: input.datetime
            })
        })
    }
    queryComments=()=>
    {
        var user = memoryUtils.user.username;
        var ref = fire.database().ref("comments").once("value",(data)=>{

            const value = data.val();
            console.log(value);
            const valuelist = [];
            for(let id in value) {

                valuelist.push({author:value[id].author,ID:value[id].ID,avatar:value[id].avatar,content:value[id].content,datetime:value[id].datetime});
            }
            console.log(valuelist);
            this.setState({comments:valuelist})
            console.log(this.state.comments);
        });
    }

    componentDidMount() {
        this.queryComments();

    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });
        this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: memoryUtils.user.username,
                        avatar: 'https://firebasestorage.googleapis.com/v0/b/don-t-let-me-die.appspot.com/o/images%2F1b081de2-49be-49a4-9d49-416a2929ab54?alt=media&token=09e858ca-9216-4f18-9c43-f37c9aa238d5',
                        content: <p>{this.state.value}</p>,
                        datetime: formateDate(Date.now()),
                    },
                    ...this.state.comments,
                ],
            });
        let list={author: memoryUtils.user.username,content: this.state.value, datetime: formateDate(Date.now())}
        this.postUserData(list)
    };

    handleChange = e => {

        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                    avatar={
                        <Avatar
                            src="https://firebasestorage.googleapis.com/v0/b/don-t-let-me-die.appspot.com/o/images%2F1b081de2-49be-49a4-9d49-416a2929ab54?alt=media&token=09e858ca-9216-4f18-9c43-f37c9aa238d5"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </>
        );
    }
}

