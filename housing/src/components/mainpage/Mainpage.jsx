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
                        <Link to="/archive">
                            <button className="width">Archive</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/findroomate">
                            <button className="width">Find Roomate</button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/listApt">
                            <button className="width">List Apartment</button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/findApt">
                            <button className="width">Find Apartment</button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/event">
                            <button className="width">Events</button>
                        </Link>
                    </div>

                </div>
            </div>
            </>
   
        );
    }
}

export default MainPage;
