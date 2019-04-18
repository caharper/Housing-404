import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div>
            <Menu>
                <Link id="main" className="menu-item" to="/">Main</Link>
                <Link id="profile" className="menu-item" to="/profile">Profile</Link>
            </Menu>
        </div>
        
        {/* <Link to="/profile">
            <button type="button" className="btn btn-default user-button" aria-label="Right Align">
                Profile
            </button>
        </Link> */}

        <button aba>
                Logout
            </button>
    </nav>
)

export default Navbar;
