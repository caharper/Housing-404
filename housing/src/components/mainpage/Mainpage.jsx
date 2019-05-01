import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import './mainpage.css'


class MainPage extends Component {

  state = {
    didChange: null,
  }

    render() {
        return (
            <>
            <div>
                <Navbar didChange={this.state.didChange}></Navbar>
            </div>
            <div>
                <div className="align">
                  <div className="mb-2">
                      <Link to="/profile">
                          <button className="mainButton width">My Profile</button>
                      </Link>
                  </div>

                    <div className="mb-2">
                        <Link to="/notification">
                            <button className="mainButton width">Notifications</button>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/findroomate">
                            <button className="mainButton width">Find A Roomate</button>
                        </Link>
                    </div>

                    <div className="mb-2">
                        <Link to="/listApt">
                            <button className="mainButton width">List An Apartment</button>
                        </Link>
                    </div>

                    <div className="mb-2">
                        <Link to="/findApt">
                            <button className="mainButton width">Find An Apartment</button>
                        </Link>
                    </div>

                    <div className="mb-2">
                        <Link to="/myevent">
                            <button className="mainButton width">My Events</button>
                        </Link>
                    </div>

                    <div className="mb-2">
                        <Link to="/event">
                            <button className="mainButton width">Events</button>
                        </Link>
                    </div>

                </div>
            </div>
            </>
        );
    }
}
export default MainPage;