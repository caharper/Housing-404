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
    <nav className="navbar navbar-dark bg-dark justify-content-between mt-" >
        <div>
            <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link id="main" className="dropdown-item" to="/main">Main</Link></li>
                    <li> <Link id="notifcation" className="dropdown-item" to="/notification">Notifcation</Link></li>
                    <li><Link id="findroomate" className="dropdown-item" href="/findroomate" >Find Roomate</Link></li>
                    <li><Link id="listApt" className="dropdown-item" to="/findroomate">List Apartment</Link></li>
                    <li><Link id="findApt" className="dropdown-item" to="/findApt">Find Apartment</Link></li>
                    <li><Link id="event" cclassName="dropdown-item" to="to=/event">Events</Link></li>
                    <li><Link id="myevent" className="dropdown-item" to="/myevent">My Events</Link></li>
                    <li><Link id="profile" className="dropdown-item" to="/profile">Profile</Link></li>
                </div>
            </div>
        </div>
        <a class="navbar-brand" href="#">{Id}PlaceHolder</a>

        <button onClick={Logout} className="logoutButton" >
            Logout
            </button>

    </nav>
)

export default Navbar;

