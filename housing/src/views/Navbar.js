import React from 'react';

const Navbar = () => (
    <nav class="navbar navbar-dark bg-dark justify-content-between">
        <button type="button" class="btn btn-default user-button" aria-label="Left Align">
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
        </button>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </nav>
)

export default Navbar;
