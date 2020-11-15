/*
Application
 */
import React, {Component} from 'react';

//import of the routing
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from "./pages/login/login.js";
import Personal from "./pages/personal/personal";
import Homepage from "./pages/homepage/homepage";
import index from "babel-plugin-import/src";
import homepage from "./pages/homepage/homepage";
export default class App extends Component{
    render() {
        return (
            //Home page:router
            <BrowserRouter>
                <Switch> {/*Only match one of them*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/personal' component={Personal}></Route>
                    <Route path='/' component={homepage}></Route>
                </Switch>

            </BrowserRouter>
        )
         }
}

