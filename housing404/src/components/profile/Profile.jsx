import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository';
import './profile.css';
import accountLogo from './../../user_ph_logo.svg';


class Profile extends Component {
  accountRepository = new AccountRepository;

  state = {
    userList: null,
    resetPassword: null,
    password: '',
    aptListings: null
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
        localStorage.removeItem("isLoggedIn");
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

    return (
      <>
        <Navbar></Navbar>

        <div>
          <div className="archiveResult" >
            <div className="row">
              <div className="col col-mg-8">
                <div className="profile">
                  <div className="row">
                    <img className="icon position-absolute pl-1" src={accountLogo}></img>
                  </div>
                  <h1>Profile Information</h1>

                  <div>Name: {userList.name}</div>
                  <div> Gender: {userList.gender}</div>
                  <div> Tidyness: {userList.tidyness}</div>
                  <div> Year: {userList.yearP}</div>
                  <div> Pets: {userList.pets}</div>
                  <button onClick={() => this.deleteAccount()} className="deleteAccButton">Delete Account</button>

                </div>

              </div>


              <div className="col col-mg-8">
                <div className="resetPassword">
                  <h1>Change Password</h1>
                  <form>
                    <div class="form-group">
                      <input type="password" onChange={this.updatePassword} value={this.state.password} className="form-control" id="newPassword" placeholder="New Password" />
                    </div>
                    <div className="input-group-append">
                      <button onClick={this.changePassword} className="resetButton">Send</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

            <div className="row">
              <h5>Your apartment listings:</h5>
            </div>

            {this.state.aptListings.map(listing => (
              <>
                <div className="row">
                  <div className="col-5">
                    <div>Description: {listing.description}</div>
                  </div>
                  <div className="col-5">
                    <div>Location: {listing.location}</div>
                  </div>
                  <button onClick={() => this.deleteApartment(listing.a_id)} className="btn-red">Delete</button>
                </div>
              </>
            ))}


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
