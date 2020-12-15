import React, {Component} from 'react';
import storageUtils from "../../utils/storageUtils";
import fire from "../../api/commonFirebase";
import {List, Typography, Divider, Spin, Card, Table, Button, message, Image} from 'antd';
import memoryUtils from "../../utils/memoryUtils";
import LinkButton from 'react'


var data = [

];
export default class myCollection extends Component{

   state = {
       loading:false,
        list:[],
    }
    DeleteCollection =(user)=>{
        this.setState({loading:true})
        var Myuser = memoryUtils.user.username;
        var ref = fire.database().ref("users/"+user._ID).remove()
        this.queryCollectionPlant();
        message.success("Delete success!:"+user.UserPlant)
        this.setState({loading:false})
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
                title: 'Image',
                dataIndex: '',
                render: (user) => <Image width={60} height={60}  src={user.Image}></Image>,
            }
            ,
            {
                title: 'Note',
                dataIndex: 'Note',

            }
            ,
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                width:300,
                render: (user) => <Button onClick={()=>this.DeleteCollection(user)}>Delete</Button>,
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
        this.setState({loading:true})
        var user = memoryUtils.user.username;
        var ref = fire.database().ref("users").orderByChild("ID").equalTo(user).once("value",(data)=>{

            const value = data.val();
            const valuelist = [];
            for(let id in value) {
                valuelist.push({_ID:id,ID:value[id].ID,UserPlant:value[id].UserPlant,Image:value[id].url,Note:value[id].Note});
            }
            console.log(valuelist);
            this.setState({list:valuelist})
            console.log(this.state.list);
        });
        this.setState({loading:false})

    }

    render() {
       const {list,loading} = this.state
        const cardTitle ="My collection";
        return (
            <Card title={cardTitle} >
                <Table
                    bordered = {true}
                    dataSource={list}
                    loading = {loading}
                    columns={this.columns}
                    pagination = {{defaultPageSize:4,showQuickJumper:true}}
                />
            </Card>
        )
    }
}