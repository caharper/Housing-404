import React, { Component } from 'react';
import './homepage.css';


export class LoginInformation extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-dark text-white">
          <h5>Your Login Information</h5>
        </div>

        <div className="card-body special-card">
          <div className="row">
            <div className="col-12">
              <form>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="name">Full Name</label>
                    <input type="text"
                           id="name"
                           name="name"
                           className="form-control"
                           placeholder="Full Name"
                           value={this.props.name} // Prop: The name input data
                           onChange={this.props.handleChange} // Prop: Puts data into state
                           />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="email">Your Email</label>
                    <input type="text"
                           id="email"
                           name="email"
                           className="form-control"
                           placeholder="Email"
                           value={this.props.email} // Prop: The email input data
                           onChange={this.props.handleChange} // Prop: Puts data into state
                           />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id="password"
                           name="password"
                           className="form-control"
                           placeholder="Password"
                           value={this.props.password} // Prop: The password input data
                           onChange={this.props.handleChange} // Prop: Puts data into state
                           />
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default LoginInformation
