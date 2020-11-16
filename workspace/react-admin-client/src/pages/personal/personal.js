/*
routing component of personal page
 */
import React,{Component} from "react";
import {Redirect,Link,Route,Switch} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils";

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
import Home from "../home/home";
import PlantCalendar from "../plantcalendar/plantcalendar";
import PersonalInformation from "../personalinformation/personalinformation";
import PlantCards from "../plantcards/plantcards";
import PlantCardsMainView from "../plantcardsmainview/plantcardsmainview";
import WateringMainView from "../wateringmainview/wateringmainview";
import WateringCardsView from "../wateringcardsview/wateringcardsview";
import Search from "../search/search";
import AddPlantCard from "../addplantcard/addplantcard";
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
                            reserved
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title={user.username} >
                            <Menu.Item key="3"> <Link to ='/personal/personalinformation'>Personal information</Link></Menu.Item>
                            <Menu.Item key="4"> <Link to ='/personal/plantcards'>Plant Cards</Link></Menu.Item>
                            <Menu.Item key="5"> <Link to ='/personal/plantcardsmainview'>Main View</Link></Menu.Item>
                            <Menu.Item key="6"> <Link to ='/personal/addplantcard'>Add plant card</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2" icon={<CalendarOutlined />}>
                           <Link to ='/personal/plantcalendar'>Calendar</Link>
                        </Menu.Item>

                        <SubMenu key="sub2" icon={<SearchOutlined />} title="Watering Schedule">
                            <Menu.Item key="7"><Link to ='/personal/wateringmainview'>Main View</Link></Menu.Item>
                            <Menu.Item key="8"><Link to ='/personal/wateringcardsview'>Card View</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<SearchOutlined />}>
                            <Link to ='/personal/search'>Search</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ margin: '0 16px' }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div>
                            <Switch>
                                <Route path='/personal/plantcalendar' component={PlantCalendar}/>
                                <Route path='/personal/plantcards' component={PlantCards}/>
                                <Route path='/personal/plantcardsmainview' component={PlantCardsMainView}/>
                                <Route path='/personal/personalinformation' component={PersonalInformation}/>
                                <Route path='/personal/addplantcard' component={AddPlantCard}/>
                                <Route path='/personal/search' component={Search}/>
                                <Route path='/personal/wateringmainview' component={WateringMainView}/>
                                <Route path='/personal/wateringcardsview' component={WateringCardsView}/>
                            </Switch>
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>CS353 Team 7 Copyright © 2020</Footer>
                </Layout>
            </Layout>
        )
    }
}
