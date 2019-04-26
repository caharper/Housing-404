import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository'


class Profile extends Component {
  accountRepository = new AccountRepository;

  state = {
    user: null
  }
  render() {
    if(this.state.user === null){
      return(<></>)
    }

    const { resetPassword, user } = this.state;

    return (
      <>
        <Navbar></Navbar>

        <div>
          <h1>Profile Page</h1>
          <div>
    
              <div>
                <div>Name: {this.state.user.name}</div>
                <div> Gender: {this.state.user.gender}</div>
                <div> Smoker: {this.state.user.smoker}</div>
                <div> Tidyness: {this.state.user.tidyness}</div>
                <div> Smoker: {this.state.user.smoker}</div>
                <div> Year: {this.state.user.yearP}</div>
                <div> Pets: {this.state.user.pets}</div>


                <button onClick={this.remove}>Delete Account</button>
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
    this.accountRepository.getUserProfile()
      .then(user => this.setState({ user }))
  }
}

Profile.propTypes = {

};

export default Profile;
