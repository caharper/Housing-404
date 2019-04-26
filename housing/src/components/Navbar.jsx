import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './navbar.css'


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
                <Link id="archive" className="menu-item" to="/archive">Archive</Link>
                <Link id="profile" className="menu-item" to="/profile">Profile</Link>
            </Menu>
            <a class="navbar-brand" href="#">PlaceHolder</a>
        </div>

        <button>
            Logout
            </button>
    </nav>
)

export default Navbar;
