import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import './mainpage.css'


class MainPage extends Component {

    render() {
        return (
            <>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <div className="align">
                    <div>
                        <Link to="/notification">
                            <button className="mainButton width">Notification</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/findroomate">
                            <button className="mainButton width">Find Roomate</button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/listApt">
                            <button className="mainButton width">List Apartment</button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/findApt">
                            <button className="mainButton width">Find Apartment</button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/event">
                            <button className="mainButton width">Events</button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/myevent">
                            <button className="mainButton width">My Events</button>
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/profile">
                            <button className="mainButton width">Profile</button>
                        </Link>
                    </div>

                </div>
            </div>
            </>
   
        );
    }
}

export default MainPage;
