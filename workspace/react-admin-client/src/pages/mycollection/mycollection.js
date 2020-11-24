import React, {Component} from 'react';
import storageUtils from "../../utils/storageUtils";
import fire from "../../api/commonFirebase";
import {List, Typography, Divider, Spin, Card, Table, Button, message} from 'antd';
import memoryUtils from "../../utils/memoryUtils";
import LinkButton from 'react'


var data = [

];
export default class myCollection extends Component{

   state = {
        list:[]
    }
    initColumns = () =>{
        this.columns = [
            {
                title: 'UserName',
                dataIndex: 'ID',
            },
            {
                title: 'My collection',
                dataIndex: 'UserPlant',
            }
            ,
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                width:300,
                render: () => <Button>Delete</Button>,
            },

        ];
    }
    componentWillMount() {
        this.initColumns()
    }
    componentDidMount() {
      this.queryCollectionPlant();

    }


    queryCollectionPlant=()=>
    {
        var user = memoryUtils.user.username;
        var ref = fire.database().ref("users").orderByChild("ID").equalTo(user).once("value",(data)=>{

            const value = data.val();
            const valuelist = [];
            for(let id in value) {
                valuelist.push(value[id]);
            }
            console.log(valuelist);
            this.setState({list:valuelist})
            console.log(this.state.list);
        });


    }

    render() {
       const {list} = this.state
        const cardTitle ="My collection";
        return (
            <Card title={cardTitle} >
                <Table
                    bordered = {true}
                    dataSource={list}
                       columns={this.columns}
                />;
            </Card>
        )
    }
}