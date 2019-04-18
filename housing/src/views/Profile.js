import React, { Component } from 'react';
import Placeholder from '../placeholder.png';

class Profile extends Component {

  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <div>
          <img src={Placeholder} alt="profileimg" height="100" width="100" />
        </div>
        Change password
        <div>
          Old Password
          <input type="text" name="oldPassword" />
        </div>
        <div>
          New Password
          <input type="text" name="newPassword" />
        </div>
        <div>
          <button type="button" className="btn btn-default user-button" aria-label="Right Align"> Reset </button>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {

};

export default Profile;
