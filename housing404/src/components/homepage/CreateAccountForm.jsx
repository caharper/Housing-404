import React, { Component } from 'react';
import { LoginInformation } from './LoginInformation'
import { PersonalDetails } from './PersonalDetails'
import { RoommateDesc } from './RoommateDesc'
import { Review } from './Review'
import './homepage.css'


export class CreateAccountForm extends Component {
  constructor(props) {
    super(props)

    // Bind new functions for next and previous
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)

    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      email: '',
      name: '',
      password: '',

      picture: '',
      about: '',

      address: '',
      roomDesc: '',
    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3? 4: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  // ******** May need to change here
  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  onCreateAccount() {
    // Add logic on form submit
    // This should post to the api to add a user
  }

  // The "next" and "previous" button functions
  get previousButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <button
          className="btn btn-secondary btn-block"
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    // ...else return nothing
    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 4, then render the "next" button
    if(currentStep <4){
      return (
        <button
          className="btn btn-primary btn-block float-right"
          type="button" onClick={this._next}>
        Next
        </button>
      )
    }
    // ...else render nothing
    return null;
  }

  get createAccountButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 4, then render the "next" button
    if(currentStep === 4){
      return (
        <button
          className="btn btn-success btn-block float-right"
          type="button" onClick={this.onCreateAccount}>
        Create Account
        </button>
      )
    }
    // ...else render nothing
    return null;
  }

  // Use the submitted data to set the state
  // Needs a lot more logic
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, name, password } = this.state
    alert(`Your registration detail: \n
      Email: ${email} \n
      Name: ${name} \n
      Password: ${password}`)
  }


  render() {
    return (
      <React.Fragment>

      <form onSubmit={this.handleSubmit}>

        <LoginInformation
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}>
        </LoginInformation>
        <PersonalDetails
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          picture={this.state.picture}
          about={this.state.about}>
        </PersonalDetails>
        <RoommateDesc
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          address={this.state.address}
          roomDesc={this.state.roomDesc}>
        </RoommateDesc>
        <Review
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          picture={this.state.picture}
          about={this.state.about}
          address={this.state.address}
          roomDesc={this.state.roomDesc}>
        </Review>


        {(this.state.currentStep !== 1 && this.state.currentStep !== 4) &&
          <div className="row">
            <div className="col-6">
              {this.previousButton}
            </div>
            <div className="col-6">
              {this.nextButton}
            </div>
          </div>
        }

        {this.state.currentStep === 1 &&
          this.nextButton
        }

        {this.state.currentStep === 4 &&
          <div className="row">
            <div className="col-6">
              {this.previousButton}
            </div>
            <div className="col-6">
              {this.createAccountButton}
            </div>
          </div>
        }


      </form>
      </React.Fragment>
    )
  }
}

export default CreateAccountForm
