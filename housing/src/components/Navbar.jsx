import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div>
            <div class="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </button>
                <div class="dropdown-menu">
                    <li>
                        <Link id="main" className="dropdown-item" href="/main">Main</Link>
                        <Link id="notifcation" className="dropdown-item" href="/notification">Notifcation</Link>
                        <Link id="findroomate" className="dropdown-item" href="/findroomate" >Find Roomate</Link>
                        <Link id="listApt" className="dropdown-item" href="/findroomate">List Apartment</Link>
                        <Link id="findApt" className="dropdown-item" href="/findApt">Find Apartment</Link>
                        <Link id="event" cclassName="dropdown-item" href="to=/event">Events</Link>
                        <Link id="myevent" className="dropdown-item" href="/myevent">My Events</Link>
                        <Link id="profile" className="dropdown-item" href="/profile">Profile</Link>
                    </li>
                </div>
            </div>
            <a class="navbar-brand" href="#">{Id}PlaceHolder</a>
        </div>

        <button onClick={Logout} className="logoutButton" >
            Logout
            </button>

    </nav>
)

export default Navbar;

