import React, { Component } from 'react';


export class LoginNav extends React.Component {
  render() {

    // The markup for the Step 1 UI
    return(
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 float-right">
              <input className="form-control mr-sm-2" placeholder="Email" aria-label="Search"/>
              <input className="form-control mr-sm-2" placeholder="Password" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default LoginNav
