import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
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
function Id(){
localStorage.getItem("sessuid") 
}

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div>
            <Menu>
                <Link id="main" className="menu-item" to="/main">Main</Link>
                <Link id="findroomate" className="menu-item" to="/findroomate">Find Roomate</Link>
                <Link id="findApt" className="menu-item" to="/findApt">Find Apartment</Link>
                <Link id="listApt" className="menu-item" to="/listApt">List Apartment</Link>
                <Link id="event" className="menu-item" to="/event">Events</Link>
                <Link id="myevent" className="menu-item" to="/myevent">My Events</Link>
                <Link id="notifcation" className="menu-item" to="/notification">Notifcation</Link>

                <Link id="profile" className="menu-item" to="/profile">Profile</Link>
            </Menu>
            <a class="navbar-brand"  href="#">{Id}PlaceHolder</a>
        </div>

        <button onClick={Logout} >
            Logout
            </button>

    </nav>
)

export default Navbar;
