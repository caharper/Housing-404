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
                          <button className="width">My Profile</button>
                      </Link>
                  </div>

                    <div className="mb-2">
                        <Link to="/notification">
                            <button className="width">Notifications</button>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/findroomate">
                            <button className="width">Find A Roomate</button>
                        </Link>
                    </div>

                    <div className="mb-2">
                        <Link to="/listApt">
                            <button className="width">List Housing</button>
                        </Link>
                    </div>

                    <div className="mb-2">
                        <Link to="/findApt">
                            <button className="width">Find Housing</button>
                        </Link>
                    </div>

                    <div className="mb-2">
                        <Link to="/myevent">
                            <button className="width">My Events</button>
                        </Link>
                    </div>

                    <div className="mb-2">
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
