import React, { Component } from 'react';
import { LoginInformation } from './LoginInformation'
import { PersonalDetails } from './PersonalDetails'
import { RoommateDesc } from './RoommateDesc'
import { Review } from './Review'
import './homepage.css'
import $ from 'jquery';
import { NewUser } from './../../models/newUser';

export class CreateAccountForm extends Component {
  constructor(props) {
    super(props)

    // Bind new functions for next and previous
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)

    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1

      // Login information
      email: '',
      name: '',
      password: '',

      confirmPass: ' ',

      // Personal details/preferences
      gender: '',
      picture: '',
      smoker: '',
      year: '',
      bedTimePref: 'na',
      wakeTime: 'na',
      pets: '',

      // Roommate preferences
      smokerPref: '',
      generPref: '',
      tidynessPref: '',
      yearPref: '',
      tempPref: 0,
      wakeTimePref: 'na'

    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
  }

  onPhotoUpload(pic){
      this.setState(state => {
        state.picture = pic
        return state
      })
    }

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep

    // LoginInformation check
    if(this.state.currentStep === 1) {

      // Reset
      $("#password-create").removeClass("is-invalid");
      $("#confirmPass").removeClass("is-invalid");
      $("#invalid-pass").addClass("incorrect-no-display");
      $("#email-create").removeClass("is-invalid");
      $("#invalid-email").addClass("incorrect-no-display");
      $("#name").removeClass("is-invalid");
      $("#no-name").addClass("incorrect-no-display");

      // Passwords
      let matchingPass = this.state.password === this.state.confirmPass

      // Email is valid
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let validEmail = re.test(this.state.email) && (this.state.email !== '');

      // Add logic to check if the user inputted name too
      if(!matchingPass || !validEmail || this.state.name === ''){
        if(!matchingPass){
          // Not changing password for some reason
          $("#password-create").addClass("is-invalid");
          $("#confirmPass").addClass("is-invalid");
          $("#invalid-pass").removeClass("incorrect-no-display");
        }

        if(!validEmail || this.state.email === ''){
          // Label invalid email
          $("#email-create").addClass("is-invalid");
          $("#invalid-email").removeClass("incorrect-no-display");
        }

        if(this.state.name === ''){
          $("#name").addClass("is-invalid");
          $("#no-name").removeClass("incorrect-no-display");
        }

        // Don't let the user go on
        return
      }
    }

    // PersonalDetails check
    else if (this.state.currentStep === 2) {

      // Reset
      $("#gender").removeClass("is-invalid");
      $("#smoker").removeClass("is-invalid");
      $("#year").removeClass("is-invalid");
      $("#pets").removeClass("is-invalid");
      $("#invalid-personal-details").addClass("incorrect-no-display");


      let allInput = true;
      // Check Gender
      if(this.state.gender === ''){
        $("#gender").addClass("is-invalid");
        allInput = false;
        // $("#invalid-pass").removeClass("incorrect-no-display");
      }

      // check smoker
      if(this.state.smoker === ''){
        $("#smoker").addClass("is-invalid");
        allInput = false;
      }

      // Check year
      if(this.state.year === ''){
        $("#year").addClass("is-invalid");
        allInput = false;
      }

      // Check pets
      if(this.state.pets === '') {
        $("#pets").addClass("is-invalid");
        allInput = false;
      }

      if(allInput === false){
        // Add the label for enter all
        $("#invalid-personal-details").removeClass("incorrect-no-display");
        return
      }

    }

    // RoommateDesc check
    else if (this.state.currentStep === 3 ) {

      // Reset
      $("#generPref").removeClass("is-invalid");
      $("#smokerPref").removeClass("is-invalid");
      $("#tidynessPref").removeClass("is-invalid");
      $("#yearPref").removeClass("is-invalid");
      $("#invalid-roommate-details").addClass("incorrect-no-display");


      let allInput = true;
      // Check Gender
      if(this.state.generPref === ''){
        $("#generPref").addClass("is-invalid");
        allInput = false;
      }

      // check smoker
      if(this.state.smokerPref === ''){
        $("#smokerPref").addClass("is-invalid");
        allInput = false;
      }

      // check tidyness
      if(this.state.tidynessPref === ''){
        $("#tidynessPref").addClass("is-invalid");
        allInput = false;
      }

      // Check year
      if(this.state.yearPref === ''){
        $("#yearPref").addClass("is-invalid");
        allInput = false;
      }

      if(allInput === false){
        // Add the label for enter all
        $("#invalid-roommate-details").removeClass("incorrect-no-display");
        return
      }

    }


    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3? 4: currentStep + 1
    this.setState({
      currentStep: currentStep
    })

    let current_fs = $(this).parent();
	  let next_fs = $(this).parent().next();

    // Now update the progressbar
    // $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    $("#progressbarHome li").eq(this.state.currentStep).addClass("active");
  }

  // ******** May need to change here
  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })

    // Now update the progressbar
    $("#progressbarHome li").eq(this.state.currentStep).removeClass("active");
    $("#progressbarHome li").eq(this.state.currentStep - 1).removeClass("active");
  }

  // The "next" and "previous" button functions
  get previousButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <button
          className="btn btn-outline-primary btn-block mt-2"
          type="button" onClick={this._prev}>
        Back
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
          className="btn btn-primary btn-block float-right mt-2"
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
          className="btn btn-success btn-block float-right mt-2"
          type="button" onClick={() => this.onSubmit()}>
        Create Account
        </button>
      )
    }
    // ...else render nothing
    return null;
  }

// ***** Having issues
  onSubmit(){

      let newUser = new NewUser(this.state.name, this.state.email, this.state.password, this.state.gender,
                                this.state.smoker, this.state.year, this.state.bedTimePref,
                                this.state.wakeTime, this.state.pets, this.state.smokerPref, this.state.generPref,
                                this.state.tidynessPref, this.state.yearPref, this.state.tempPref, this.state.wakeTimePref, this.state.picture);

      console.log(newUser);

      this.props.onCreateAccount(newUser);

      // clears the form
      this.setState(
        {
          currentStep: 1, // Default is Step 1

          // Login information
          email: '',
          name: '',
          password: '',

          // Personal details/preferences
          gender: '',
          picture: '',
          smoker: null,
          year: null,
          bedTimePref: null,
          wakeTime: null,
          pets: '',

          // Roommate preferences
          smokerPref: null,
          generPref: '',
          tidynessPref: null,
          yearPref: null,
          tempPref: null,
          wakeTimePref: null
        })
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
          onPhotoUpload={x => this.onPhotoUpload(x) }
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          gender={this.state.gender}
          picture={this.state.picture}
          smoker={this.state.smoker}
          year={this.state.year}
          bedTimePref={this.state.bedTimePref}
          wakeTime={this.state.wakeTime}
          tempPref={this.state.tempPref}
          pets={this.state.pets}>
        </PersonalDetails>

        <RoommateDesc
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          smokerPref={this.state.smokerPref}
          generPref={this.state.generPref}
          tidynessPref={this.state.tidynessPref}
          yearPref={this.state.yearPref}
          wakeTimePref={this.state.wakeTimePref}>
        </RoommateDesc>
        <Review
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          name={this.state.name}
          email={this.state.email}
          picture={this.state.picture}
          gender={this.state.gender}
          smoker={this.state.smoker}
          year={this.state.year}
          pets={this.state.pets}
          smokerPref={this.state.smokerPref}
          generPref={this.state.generPref}
          tidynessPref={this.state.tidynessPref}
          yearPref={this.state.yearPref}
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
