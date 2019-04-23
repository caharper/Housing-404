import React, { Component } from 'react';


export class LoginNav extends React.Component {

  state = {
    email: '',
    password: ''
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    // Add logic for valid email
    return this.state.email.length > 0 && this.state.password.length > 0;
  }


  render() {

    // The markup for the Step 1 UI
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-0 m-0">
        <div className="row col-12 m-0 p-0">
          <div className="navbar-brand text-white">Housing404</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0" onSubmit={this.props.onLogin(this.state.email, this.state.password)}>
              <input className="form-control mr-sm-2" placeholder="Email" id="email" type="text" value={this.state.email} onChange={this.handleChange}/>
              <input className="form-control mr-sm-2" placeholder="Password" id="password" type="password" value={this.state.password} onChange={this.handleChange}/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" disabled={!this.validateForm()}>Login</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default LoginNav
