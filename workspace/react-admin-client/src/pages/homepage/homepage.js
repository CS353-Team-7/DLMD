import React,{Component} from "react";
/*
routing component of home page
 */
import './css/homepagestyle.css'
import {Link} from "react-router-dom";
import leaf1 from './img/leaf1.png';
import plant4 from "./img/plant4.jpg";
import leaf from './img/leaf.png';
import calendar from './img/calendar.png';
import check from './img/check.png';

import Login from "../login/login";


export default class Homepage extends Component{
    render() {
        return (
        <div>
            <body className="homepagebody">
            <header className ="homepageheader">
                <div className ="container">
                    <div id = "branding">
                        <h1>DON'T LET ME DIE <img src={leaf1}/></h1>
                    </div>
                    <nav>
                        <ul>


                        <li><a href="/login">Login</a></li>
                        <li><a to="/login">Sign Up</a></li>
                    </ul>
                </nav>
        </div>
    </header>
        <section id="showcase">
            <div className = "container">
                <div className ="box2">
                    <h1> NOT SURE HOW TO TAKE CARE OF YOUR PLANTS?</h1>
                    <a href="/login">  <button type = "submit" class="button_1"> Create a free account</button></a>
                </div>
                <div className= "box2">
                    <img src={plant4}/>
                </div>
            </div>
        </section>
        <section id="boxes">
            <div className="container">
                <div className="box">
                    <img src={leaf}/>
                        <h3>Add your plants</h3>
                        <p>Browse a database of exisiting houseplants and add them to your collection.
                            Can't find the plant you want? No problem. You can create your own plant cards.</p>
                </div>
                <div className="box">
                    <img src={calendar}/>
                        <h3>See your calendar</h3>
                        <p>Your selected plants will be automatically added to a calendar that will create a waterinmg and care scheduule for each individual plant.</p>
                </div>
                <div className="box">
                    <img src={check}/>
                        <h3>Get the ultimate care</h3>
                        <p>That's it you don't have to do anything more. The care schedule will show you exactly when to take care of each plant so you don't have to worry about remembering.</p>
                </div>
            </div>
        </section>
        <footer>
            <p> CS353 Team 7 Copyright &copy; 2020</p>
        </footer>
            </body>
        </div>

        )
    }
}
