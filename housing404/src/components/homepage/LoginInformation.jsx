import React, { Component } from 'react';
import './homepage.css';


export class LoginInformation extends React.Component {

  state = {
  }

  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }

    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-secondary text-white">
          <h3 className="font-weight-bold">Create an account</h3>
        </div>

        <div className="card-body special-card text-left">
          <div className="row">
            <div className="col-12">
              <form className="needs-validation" novalidate>

                <div className="row my-0 py-0">
                  <div className="form-group col-12">
                    <label htmlFor="name">Full Name</label>
                    <input type="text"
                           id="name"
                           name="name"
                           className="form-control"
                           placeholder="Full Name"
                           maxLength={25}
                           value={this.props.name} // Prop: The name input data
                           onChange={this.props.handleChange} // Prop: Puts data into state
                            />
                  </div>
                </div>
                <div className="row justify-content-center py-0 my-0">
                  <p className="incorrect incorrect-no-display" id="no-name">Name must be between 1 and 25 letters</p>
                </div>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="email">Your Email</label>
                    <input type="text"
                           id="email-create"
                           name="email"
                           className="form-control"
                           placeholder="Email"
                           maxLength={25}
                           value={this.props.email} // Prop: The email input data
                           onChange={this.props.handleChange} // Prop: Puts data into state
                            />
                  </div>
                </div>
                <div className="row justify-content-center py-0 my-0">
                  <p className="incorrect incorrect-no-display" id="invalid-email">Not a valid email</p>
                </div>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id="password-create"
                           name="password"
                           className="form-control"
                           placeholder="Password"
                           maxLength={64}
                           value={this.props.password} // Prop: The password input data
                           onChange={this.props.handleChange} // Prop: Puts data into state
                            />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password"
                           id="confirmPass"
                           name="confirmPass"
                           className="form-control"
                           placeholder="Password"
                           value={this.props.confirmPass}
                           onChange={this.props.handleChange} // Should check if matches here
                            />
                  </div>
                </div>
                <div className="row justify-content-center py-0 my-0">
                  <p className="incorrect incorrect-no-display" id="invalid-pass">Passwords did not match</p>
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
