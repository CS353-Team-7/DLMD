/*
routing component of personal page
 */
import React,{Component} from "react";
import {Redirect,Link,Route,Switch} from 'react-router-dom'

import {message,Image,Button,Modal} from "antd";

import { Layout, Menu, Breadcrumb } from 'antd';
import {
   ExclamationCircleOutlined ,
    SearchOutlined,
    CalendarOutlined,
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './personal.css'
import PlantCalendar from "../plantcalendar/plantcalendar";
import PersonalInformation from "../personalinformation/personalinformation";
import PlantCards from "../plantcards/plantcards";
import myCollection from "../mycollection/mycollection";
import WateringMainView from "../wateringmainview/wateringmainview";
import WateringCardsView from "../wateringcardsview/wateringcardsview";
import Search from "../search/search";
import AddPlantCard from "../addplantcard/addplantcard";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import { withRouter } from 'react-router-dom';
import PlantListComponent from '../plantList/plantList';



const { confirm } = Modal;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
 class Personal extends Component{
    state = {
        collapsed: false,

    };
      this = this
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
      showDeleteConfirm =()=> {
         confirm({
             title: 'Warning notices',
             icon: <ExclamationCircleOutlined />,
             content: 'Are you really ready to log out?',
             okText: 'Yes',
             okType: 'danger',
             cancelText: 'No',
             onOk:()=> {
                 console.log('OK');
                 storageUtils.removeUser();
                 memoryUtils.user={};
                 memoryUtils.userID = {};

                 message.success("log out success!");

                 this.props.history.replace('/');
                 this.forceUpdate();

             },
             onCancel() {
                 console.log('Cancel');
             },
         });
     }
    render() {

        const user = memoryUtils.user.username;
        console.log("per:"+user)
        //Check whether to log in
        if(!user){
            return <Redirect to = '/login'/>
        }

        const { collapsed } = this.state;

        return (
            <Layout style={{ minHeight: '100vh' }}>


                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} width={300}>
                    <div className="logo" style={{ minHeight: '15vh' }}> </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />} >
                            null
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title={user} >
                            <Menu.Item key="3"> <Link to ='/personal/personalinformation'>Personal information</Link></Menu.Item>
                            <Menu.Item key="4"> <Link to ='/personal/plantcards'>Plant Cards</Link></Menu.Item>
                            <Menu.Item key="5"> <Link to ='/personal/mycollection'>My collection of plants </Link></Menu.Item>
                            <Menu.Item key="6"> <Link to ='/personal/addplantcard'>Add plant card</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2" icon={<CalendarOutlined />}>
                           <Link to ='/personal/plantcalendar'>Calendar</Link>
                        </Menu.Item>

                        <SubMenu key="sub2" icon={<SearchOutlined />} title="Test">
                            <Menu.Item key="7"><Link to ='/personal/wateringmainview'>Test</Link></Menu.Item>
                            <Menu.Item key="8"><Link to ='/personal/wateringcardsview'>Test</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<SearchOutlined />}>
                            <Link to ='/personal/plantList'>Search</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ margin: '0 16px' }}>
                        <Button onClick={this.showDeleteConfirm} type="dashed">Log out</Button>

                    </Header>

                    <Content style={{ margin: '0 16px' }}>
                        <div>
                            <Switch>
                                <Route path='/personal/plantcalendar' component={PlantCalendar}/>
                                <Route path='/personal/plantcards' component={PlantCards}/>
                                <Route path='/personal/mycollection' component={myCollection}/>
                                <Route path='/personal/personalinformation' component={PersonalInformation}/>
                                <Route path='/personal/addplantcard' component={AddPlantCard}/>
                                <Route path='/personal/search' component={Search}/>
                                <Route path='/personal/wateringmainview' component={WateringMainView}/>
                                <Route path='/personal/wateringcardsview' component={WateringCardsView}/>
                                <Route path='/personal/plantList' component={PlantListComponent}/>
                                <Redirect to='/personal/plantcards'/>
                            </Switch>
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>CS353 Team 7 Copyright © 2020</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(Personal);