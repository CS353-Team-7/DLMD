import React,{Component} from "react";
/*
routing component of home page
 */
import styles from './css/homepagestyle.css'
import {Link} from "react-router-dom";
import leaf1 from './img/leaf1.png';
import leaf from './img/leaf.png';
import img08 from './img/08.png';
import calendar from './img/calendar.png';
import check from './img/check.png';

import Login from "../login/login";


export default class Homepage extends Component{
    render() {
        return (
        <div>
            <header className="homeHeader">
                <div className ="container">
                    <div id ="branding">
                        <h1>DON'T LET ME DIE  <img src={leaf1} alt=""/></h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="homepage.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><Link className="loginLink" to="Login">Login</Link></li>
                        <li><button type = "submit" className="button_2"><a href="signup.html">Sign Up</a></button></li>
                    </ul>
                </nav>
        </div>
    </header>
        <section id="showcase">
            <div className = "container">
                <div className ="box2">
                    <h1> DO YOU WANT YOUR PLANTS TO DIE? NO?</h1>
                    <a href="createaccount.html">  <button type = "submit" className="button_1"> How do I save them?</button></a>
                </div>
                <div className= "box2">
                    <img src={img08} alt=""/>
                </div>
            </div>
        </section>
        <section id="boxes">
            <div className="container">
                <div className="box">
                    <img src={leaf} alt=""/>
                        <h3>Add your plants</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.
                        </p>
                </div>
                <div className="box">
                    <img src={calendar} />
                        <h3>See your calendar</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.</p>
                </div>
                <div className="box">
                    <img src={check} alt=""/>
                        <h3>Get the ultimate care</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.</p>
                </div>
            </div>
        </section>
        <footer>
            <p> CS353 Team 7 Copyright &copy; 2020</p>
        </footer>
        </div>
        )
    }
}