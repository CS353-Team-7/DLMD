/*
routing component of personal page
 */
import React,{Component} from "react";
import memoryUtils from "../../utils/memoryUtils";
import {Redirect} from 'react-router-dom'
import {message} from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    SearchOutlined,
    CalendarOutlined,
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './personal.css'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class Personal extends Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const user = memoryUtils.user;
        //Check whether to log in
        if(!user.username){
            return <Redirect to = '/login'/>
        }

        const { collapsed } = this.state;

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} width={300}>
                    <div className="logo" style={{ minHeight: '15vh' }}>asd</div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />} >
                            Option 1
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title={user.username} >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2" icon={<CalendarOutlined />}>
                            Option 2
                        </Menu.Item>

                        <SubMenu key="sub2" icon={<SearchOutlined />} title="Team">
                            <Menu.Item key="6">Search 1</Menu.Item>
                            <Menu.Item key="8">Search 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ margin: '0 16px' }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>

                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 800 }}>
                           This is test
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>CS353 Team 7 Copyright © 2020</Footer>
                </Layout>
            </Layout>
        )
    }
}
