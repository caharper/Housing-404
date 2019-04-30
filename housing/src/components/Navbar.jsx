import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import { AccountRepository } from './../api/accountRepository'

import './navbar.css'


function Logout() {
    const accountRepository = new AccountRepository
    accountRepository
        .logout()
        .then(logout => {
            localStorage.removeItem("isLoggedIn");
            // redirect login   if(this.state.user !== null){
            window.location.href = '/';
        })

}
function Id() {
    localStorage.getItem("sessuid")
}


class Navbar extends Component {
    state = {
        active: false,
    }

    toggleDropdown = () => {
        this.setState(state => ({ active: !state.active }))
    }


    render() {

        return (

            <nav className="navbar navbar-dark bg-dark justify-content-between mt-" >

                <div>

                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false" onClick={this.toggleDropdown}>
                            Menu
                        </a>

                        {
                            this.state.active && (
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ display: 'block' }}>
                                    <li><Link id="main" className="dropdown-item" to="/main">Main</Link></li>
                                    <li> <Link id="notifcation" className="dropdown-item" to="/notification">Notifcation</Link></li>
                                    <li><Link id="findroomate" className="dropdown-item" href="/findroomate" >Find Roomate</Link></li>
                                    <li><Link id="listApt" className="dropdown-item" to="/findroomate">List Apartment</Link></li>
                                    <li><Link id="findApt" className="dropdown-item" to="/findApt">Find Apartment</Link></li>
                                    <li><Link id="event" className="dropdown-item" to="to=/event">Events</Link></li>
                                    <li><Link id="myevent" className="dropdown-item" to="/myevent">My Events</Link></li>
                                    <li><Link id="profile" className="dropdown-item" to="/profile">Profile</Link></li>
                                </div>
                            )
                        }
                    </div>
                    <a className="navbar-brand" href="#">PlaceHolder</a>

                </div>

                <a className="navbar-brand" href="#">Housing404</a>

                <button onClick={Logout} className="logoutButton" >
                    Logout
            </button>

            </nav>
        )
    }
}

export default Navbar;

