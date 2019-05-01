import React , { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AccountRepository } from './../api/accountRepository';
import logo from './../housing404.svg';

import './navbar.css'

class Navbar extends Component {
  accountRepository = new AccountRepository;

  state = {
    user: null,
  }

  Logout() {

      this.accountRepository
          .logout()
          .then(logout => {
              localStorage.removeItem("sessuid");
              // redirect login   if(this.state.user !== null){
              window.location.href = '/';
          })
  }

  render() {

    if (!this.state.user) {
      return (<></>)
    }

    if(!this.props.didChange){
      return (
        <nav className="navbar navbar-dark bg-dark justify-content-between postion-relative" >

            <div className="navbar-brand">
              <Link to="/main">
                <img className="icon col-2 pl-1 postion-absolute float-left" src={logo}></img>
              </Link>
            </div>

            <button onClick={() => this.Logout()} className="logoutButton" >
                Logout
                </button>

        </nav>
      );
    }

    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between mt-" >

          <div className="navbar-brand">
            <h4>
              Hello, {this.state.user.name}
            </h4>
          </div>

          <button onClick={() => this.Logout()} className="logoutButton" >
              Logout
              </button>

      </nav>
    );
  }
  componentDidMount() {
    this.accountRepository.getUserProfile(localStorage.getItem("sessuid"))
      .then(userListResp => {
        let userList = userListResp[0];
        this.setState({user: userList })
      })
  }
}
export default Navbar;
