import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div>

                <div className="align">
                    <div>
                        <Link to="/dashboard">
                            <button className="width">Dashboard</button>
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
                
                </div>
            </div>
        );
    }
}

export default Main;
