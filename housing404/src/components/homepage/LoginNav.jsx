import React, { Component } from 'react';
import { LoginUser } from './../../models/loginUser';


export class LoginNav extends React.Component {

  state = {
    email: '',
    password: ''
  }


  validateForm() {
    // Checks for valid email and non empty email/password
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.state.email.length > 0 && this.state.password.length > 0 && re.test(this.state.email)
  }

  onSubmit(){
      //
      let attemptUser = new LoginUser(this.state.email, this.state.password);
      this.props.onLogin(attemptUser);
      //
      //     // clears the form
      this.setState(
        {
          email: '',
          password: ''
        })
    }


  render() {

    // The markup for the Step 1 UI
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-0 m-0">
        <div className="row col-12 m-0 p-0">
          <div className="navbar-brand text-white">Housing404</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <div className="form-group">
                <input className="form-control mr-sm-2" placeholder="Email" id="email" type="text" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
              </div>
              <div className="form-group">
                <input className="form-control mr-sm-2" placeholder="Password" id="password" type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
              </div>
            </form>
            <button onClick={e => this.onSubmit()} className="btn btn-outline-success my-2 my-sm-0" disabled={!this.validateForm()}>Login</button>
          </div>
        </div>
      </nav>
    )
  }
}

export default LoginNav
