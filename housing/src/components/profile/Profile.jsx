import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository';
import './profile.css';
import accountLogo from './../../user_ph_logo.svg';
//import 'font-awesome/css/font-awesome.css';


class Profile extends Component {
  accountRepository = new AccountRepository;

  state = {
    userList: null,
    resetPassword: null,
    password: '',
    aptListings: null,
    change: false,
  }

  updatePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  changePassword = (e) => {
    e.preventDefault();
    this.accountRepository.editUser(localStorage.getItem("sessuid"), {
      password: this.state.password,
      name: null,
      email: null
    })
    .then(() => {
      // password reset
      this.setState({
        password: ''
      });
    })
  }

  deleteAccount(){
    this.accountRepository.deleteAccount(localStorage.getItem("sessuid"))
      .then(resp => {
        console.log(resp)
        // redirect to login page
        localStorage.removeItem("sessuid");
        // redirect login   if(this.state.user !== null){
        window.location.href = '/';
      })
      .catch(resp => {
        console.log(resp)
      })
  }

  deleteApartment(aId){
    this.accountRepository.deleteApartment(localStorage.getItem("sessuid"), aId)
      .then(eventListResp => {
        console.log(eventListResp)
        window.location.href = '/main';
      })
      .catch(eventListResp => {
        console.log(eventListResp)
      })
  }

  render() {

    if (!this.state.userList || !this.state.aptListings) {
      console.log(this.state.userList)
      return (<></>)
    }
    const { userList, resetPassword } = this.state;
    let gender = '';
    if(userList.gender === "M"){
      gender = "Male";
    }
    else if (userList.gender === "F") {
      gender = "Female";
    }
    else {
      gender = "Other";
    }
    let year = '';
    if(userList.year == "1"){
      year = "Freshman";
    }
    else if (userList.year == "2") {
      year = "Sophomore";
    }
    else if (userList.year == "3") {
      year = "Junior";
    }
    else {
      year = "Senior";
    }
    if(this.state.aptListings.length === 0){
      return (
        <>
          <Navbar></Navbar>
            <div className="container position-relative">
              <div className="row justify-content-center">
                <h1>Profile Information</h1>
              </div>
              <div className="row justify-content-center">
                <img className="person-icon position-relative pl-1" src={accountLogo}></img>
              </div>
              <div className="row justify-content-center">
                <table className="table w-50">
                  <tbody>
                    <tr>
                      <td className="text-left">Name:</td>
                      <td className="text-right">{userList.name}</td>
                    </tr>
                    <tr>
                      <td className="text-left">Gender:</td>
                      <td className="text-right">{gender}</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="text-left">Year:</td>
                      <td className="text-right">{year}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row justify-content-center">
                <h3>Your housing listings</h3>
              </div>
              <div className="row justify-content-center">
                <h6>You have no housing listings</h6>
              </div>
              <div className="row justify-content-center">
                <h3>Change Password</h3>
              </div>
              <div className="row justify-content-center">
                <div class="form-group  w-50">
                  <input type="password" onChange={this.updatePassword} value={this.state.password} className="form-control" id="newPassword" placeholder="New Password" />
                </div>
              </div>
              <div className="row justify-content-center">
                  <button onClick={this.changePassword} className="resetButton w-50">Change Password</button>
              </div>
              <div className="row justify-content-center">
                <button onClick={() => this.deleteAccount()} className="deleteAccButton w-50">Delete Account</button>
              </div>
            </div>
        </>
      );
    }
    return (
      <>
        <Navbar></Navbar>
          <div className="container position-relative">
            <div className="row justify-content-center">
              <h1>Profile Information</h1>
            </div>
            <div className="row justify-content-center">
              <img className="person-icon position-relative pl-1" src={accountLogo}></img>
            </div>
            <div className="row justify-content-center">
              <table className="table w-50">
                <tbody>
                  <tr>
                    <td className="text-left">Name:</td>
                    <td className="text-right">{userList.name}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Gender:</td>
                    <td className="text-right">{gender}</td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="text-left">Year:</td>
                    <td className="text-right">{year}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row justify-content-center">
              <h3>Your housing listings</h3>
            </div>
            <div className="row justify-content-center">
              <table className="table table-striped table-condenced w-50">
                <thead>
                  <tr>
                    <th>Listings</th>
                    <th>Description</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.aptListings.map((a, i) =>
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{a.description}</td>
                        <td>
                          <button className="btn btn-block btn-danger"
                                  onClick={() => this.deleteApartment(a.a_id)}>
                            <i className="fa fa-lg fa-trash-o"></i>
                          </button>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className="row justify-content-center">
              <h3>Change Password</h3>
            </div>
            <div className="row justify-content-center">
              <div class="form-group  w-50">
                <input type="password" onChange={this.updatePassword} value={this.state.password} className="form-control" id="newPassword" placeholder="New Password" />
              </div>
            </div>
            <div className="row justify-content-center">
                <button onClick={this.changePassword} className="resetButton w-50">Change Password</button>
            </div>
            <div className="row justify-content-center">
              <button onClick={() => this.deleteAccount()} className="deleteAccButton w-50">Delete Account</button>
            </div>
          </div>
      </>
    );
  }
  componentDidMount() {
    this.accountRepository.getUserProfile(localStorage.getItem("sessuid"))
      .then(userListResp => {
        let userList = userListResp[0];
        this.setState({ userList })
      })
    this.accountRepository.getSingleUserApartments(localStorage.getItem("sessuid"))
      .then(myApts => {
        console.log(myApts)
        this.setState({aptListings: myApts })
      })
  }
}
export default Profile;