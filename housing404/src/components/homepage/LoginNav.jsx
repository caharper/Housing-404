import React, { Component } from 'react';


export class LoginNav extends React.Component {
  render() {

    // The markup for the Step 1 UI
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-0 m-0">
        <div className="row col-12 m-0 p-0">
          <div className="navbar-brand text-white">Housing404</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" placeholder="Email" aria-label="Search"/>
              <input className="form-control mr-sm-2" placeholder="Password" type="password" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default LoginNav
