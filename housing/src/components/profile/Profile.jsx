import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository'


class Profile extends Component {
  accountRepository = new AccountRepository;

  state = {
    userList: null
  }
  
  render() {

    if(this.state.userList === null){
      return(<></>)
    } 

    // console.log('**********')
    // console.log(this.state.userList)
    // let user = this.state.userList[0].id;


    const { userList, resetPassword} = this.state;

    return (
      <>
        <Navbar></Navbar>

        <div>
          <h1>Profile Page</h1>
          <div>
          <div>
                <>
                  <div>Name: {userList.name}</div>
                  <div> Gender: {userList.gender}</div>
                  <div> Tidyness: {userList.tidyness}</div>
                  <div> Year: {userList.yearP}</div>
                  <div> Pets: {userList.pets}</div>

                  <button onClick={this.remove}>Delete Account</button>
                </>
                </div>


            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Old Password" aria-label="Old Password" aria-describedby="button-addon2" />
              <input type="text" class="form-control" placeholder="New Password" aria-label="New Password" aria-describedby="button-addon2" />
              <div class="input-group-append">
                <button onClick={this.updateRooms}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }

  componentDidMount(){
    console.log('what the fuck')
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
