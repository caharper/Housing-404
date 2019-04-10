import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar';

class Main extends Component {
    
    render() {
      return (
          <body>
            <Navbar />

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
                <Link to="/findroomate">
                    <button className="width">List Apartment</button>
                </Link>
            </div>

            <div>
                <Link to="/findroomate">
                    <button className="width">Find Apartment</button>
                </Link>
            </div>
            </div>
          </body>
    
        );
    }
  }

  export default Main;
