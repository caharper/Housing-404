import React, { Component } from 'react';
import Navbar from "../Navbar";


class Profile extends Component {
  state = {
    user: [
      {
        gender: 'female', type: 'house',
        name: "Bob", gender: "student", img: "https://via.placeholder.com/150"
      }
    ]
  }
  render() {
    const { resetPassword, user } = this.state;

    return (
      <>
        <Navbar></Navbar>
        <div>
          <h1>Profile Page</h1>
          <div>
            {user.map(user => (
              <div>
                <div>Name: {user.name}</div>
                <div> Gender: {user.gender}</div>
                <div> Smoker: {user.smoker}</div>
                <div> Tidyness: {user.tidyness}</div>
                <div> Smoker: {user.smoker}</div>
                <div> Year: {user.yearP}</div>
                <div> Pets: {user.pets}</div>
                <div className="image searched">
                  <img src={user.img} />
                </div>

                <button onClick={this.remove}>Delete Account</button>
              </div>
            ))}

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
}

Profile.propTypes = {

};

export default Profile;
