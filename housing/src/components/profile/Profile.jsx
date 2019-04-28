import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository';
import './profile.css';


class Profile extends Component {
  accountRepository = new AccountRepository;

  state = {
    userList: null,
    changePassword: null
  }

  render() {

    if (this.state.userList === null) {
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
                  <h1>Profile Information</h1>

                  <div>Name: {userList.name}</div>
                  <div> Gender: {userList.gender}</div>
                  <div> Tidyness: {userList.tidyness}</div>
                  <div> Year: {userList.yearP}</div>
                  <div> Pets: {userList.pets}</div>
                  <button onClick={this.remove} className="deleteAccButton">Delete Account</button>

                </div>

              </div>


              <div className="col col-mg-8">
                <div className="resetPassword">
                  <h1>Reset Password</h1>

                  <form>

                    <div class="form-group">
                      <input type="password" className="form-control" id="oldPassword" placeholder="Old Password" />
                    </div>
                    <div class="form-group">
                      <input type="password" className="form-control" id="newPassword" placeholder="New Password" />
                    </div>
                    <div className="input-group-append">
                      <button onClick={this.updateRooms} className="resetButton">Reset</button>
                    </div>
                  </form>




                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    console.log(localStorage.getItem("sessuid"))
    this.accountRepository.getUserProfile(localStorage.getItem("sessuid"))
      .then(userListResp => {
        console.log(userList)
        let userList = userListResp[0];
        this.setState({ userList })
        console.log(userList)
      })
  }
}

Profile.propTypes = {

};

export default Profile;
