import React, { Component } from 'react';
import { ListingLanding } from './ListingLanding'
import { ListingDetails } from './ListingDetails'
import { Misc } from './Misc'
import { ListingPicture } from './ListingPicture'
import { Review } from './Review'
// import './homepage.css'
import $ from 'jquery';
import { Apt } from './../../models/apartment';
// import { NewUser } from './../../models/newUser';

export class CreateApartmentListingForm extends Component {
  constructor(props) {
    super(props)

    // Bind new functions for next and previous
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)

    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1

      location: '',
      rent: '',
      leaseTime: '',
      description: '',
      pictue: '',
      occupants: '',
      beds: '',
      baths: '',
      squareFeet: '',
      rooms: '',
      kitchen: '',
      laundry: '',
      floor: '',
      pets: '',
      poBox: '',
      studyRooms: '',
      roomStyle: '',
      gym: '',
      pool: '',
      ac: '',
      heat: ''
    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep
    let re = /^\d*\.?\d*$/;

    // Create listing check
    if(this.state.currentStep === 1) {

      // Remove invalids for previous clicks
      $("#description-enter").removeClass("is-invalid");
      $("#location-enter").removeClass("is-invalid");
      $("#rent-enter").removeClass("is-invalid");
      $("#invalid-rent").addClass("incorrect-no-display");
      $("#invalid-location").addClass("incorrect-no-display");
      $("#invalid-description-apt").addClass("incorrect-no-display");


      // Email is valid
      let validRent = re.test(this.state.rent) && this.state.rent && this.state.rent !== 0;
      console.log(validRent)


      // Add logic to check if the user inputted name too
      if(!validRent || this.state.location === '' || this.state.description === ''){
        if(!validRent){
          // Not changing password for some reason
          $("#rent-enter").addClass("is-invalid");
          $("#invalid-rent").removeClass("incorrect-no-display");
        }

        if(this.state.location === ''){
          // Label invalid email
          $("#location-enter").addClass("is-invalid");
          $("#invalid-location").removeClass("incorrect-no-display");
        }

        if(this.state.description === ''){
          $("#description-enter").addClass("is-invalid");
          $("#invalid-description-apt").removeClass("incorrect-no-display");
        }

        // Don't let the user go on
        return
      }
    }

    // PersonalDetails check
    else if (this.state.currentStep === 2) {

      $("#occupants").removeClass("is-invalid");
      $("#beds").removeClass("is-invalid");
      $("#baths").removeClass("is-invalid");
      $("#squareFeet").removeClass("is-invalid");
      $("#invalid-sq-ft").addClass("incorrect-no-display");
      $("#invalid-apt-details").addClass("incorrect-no-display");


      let allInput = true;
      // Check occupants
      if(this.state.occupants === 0 || this.state.occupants === ''){
        $("#occupants").addClass("is-invalid");
        allInput = false;
        // $("#invalid-pass").removeClass("incorrect-no-display");
      }

      // check beds
      if(this.state.beds === 0 || this.state.beds === ''){
        $("#beds").addClass("is-invalid");
        allInput = false;
      }

      // Check baths
      if(this.state.baths === 0 || this.state.baths === ''){
        $("#baths").addClass("is-invalid");
        allInput = false;
      }

      let validSquareFt = (this.state.squareFeet !== 0 && this.state.squareFeet !== '' && re.test(this.state.squareFeet) && this.state.squareFeet)
      // Check pets
      if(!validSquareFt) {
        $("#squareFeet").addClass("is-invalid");
        $("#invalid-sq-ft").removeClass("incorrect-no-display");
        allInput = false;
      }

      if(allInput === false){
        // Add the label for enter all
        $("#invalid-apt-details").removeClass("incorrect-no-display");
        return
      }

    }

    // RoommateDesc check
    else if (this.state.currentStep === 3 ) {

      $("#floor").removeClass("is-invalid");
      $("#roomStyle").removeClass("is-invalid");
      $("#studyRooms").removeClass("is-invalid");
      $("#kitchen").removeClass("is-invalid");
      $("#invalid-floor-details").addClass("incorrect-no-display");

      let allInput = true;
      // Check Gender
      if(this.state.floor === ''){
        $("#floor").addClass("is-invalid");
        allInput = false;
      }

      // check smoker
      if(this.state.roomStyle === ''){
        $("#roomStyle").addClass("is-invalid");
        allInput = false;
      }

      // check tidyness
      if(this.state.studyRooms === ''){
        $("#studyRooms").addClass("is-invalid");
        allInput = false;
      }

      // Check year
      if(this.state.kitchen === ''){
        $("#kitchen").addClass("is-invalid");
        allInput = false;
      }

      if(allInput === false){
        // Add the label for enter all
        $("#invalid-floor-details").removeClass("incorrect-no-display");
        return
      }

    }

    else if (this.state.currentStep === 4) {
      $("#gym").removeClass("is-invalid");
      $("#pool").removeClass("is-invalid");
      $("#pets").removeClass("is-invalid");
      $("#invalid-misc-details").addClass("incorrect-no-display");

      let allInput = true;
      // Check gym
      if(this.state.gym === ''){
        $("#gym").addClass("is-invalid");
        allInput = false;
      }

      // check pool
      if(this.state.pool === ''){
        $("#pool").addClass("is-invalid");
        allInput = false;
      }

      // check pets
      if(this.state.pets === ''){
        $("#pets").addClass("is-invalid");
        allInput = false;
      }

      if(allInput === false){
        // Add the label for enter all
        $("#invalid-misc-details").removeClass("incorrect-no-display");
        return
      }
    }


    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 4? 5: currentStep + 1
    this.setState({
      currentStep: currentStep
    })

    let current_fs = $(this).parent();
    let next_fs = $(this).parent().next();

    // Now update the progressbar
    // $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    $("#progressbar li").eq(this.state.currentStep).addClass("active");
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
    $("#progressbar li").eq(this.state.currentStep).removeClass("active");
    $("#progressbar li").eq(this.state.currentStep - 1).removeClass("active");
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
    if(currentStep <5){
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
    if(currentStep === 5){
      return (
        <button
          className="btn btn-success btn-block float-right mt-2"
          type="button" onClick={() => this.onSubmit()}>
        Create Listing
        </button>
      )
    }
    // ...else render nothing
    return null;
  }

  onSubmit(){

      let newApt = new Apt(this.state.beds, this.state.year, this.state.squareFeet, this.state.baths,
                           this.state.occupants, this.state.rooms, this.state.floor, this.state.kitchen,
                           this.state.studyRooms, this.state.pets, this.state.smoking, this.state.gym,
                           this.state.pool, this.state.heat, this.state.ac, this.state.roomStyle, this.state.rent,
                           this.state.leaseTime, this.state.poBox, this.state.location, this.state.description,
                           "", this.state.laundry);

      this.props.onCreateApt(newApt);
      //
      this.state = {
        currentStep: 1, // Default is Step 1

        location: '',
        rent: '',
        leaseTime: '',
        description: '',
        pictue: '',
        occupants: '',
        beds: '',
        baths: '',
        squareFeet: '',
        rooms: '',
        kitchen: '',
        laundry: '',
        floor: '',
        pets: '',
        poBox: '',
        studyRooms: '',
        roomStyle: '',
        gym: '',
        pool: '',
        ac: '',
        heat: ''
      }
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

        <ListingLanding
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          rent={this.state.rent}
          location={this.state.location}
          description={this.state.description}>
        </ListingLanding>

        <ListingDetails
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          occupants={this.state.occupants}
          beds={this.state.beds}
          baths={this.state.baths}
          squareFeet={this.state.squareFeet}>
        </ListingDetails>

        <Misc
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          floor={this.state.floor}
          roomStyle={this.state.roomStyle}
          studyRooms={this.state.studyRooms}
          kitchen={this.state.kitchen}>
        </Misc>

        <ListingPicture
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          gym={this.state.gym}
          pool={this.state.pool}
          pets={this.state.pets}>
        </ListingPicture>

        <Review
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          rent={this.state.rent}
          location={this.state.location}
          description={this.state.description}
          occupants={this.state.occupants}
          beds={this.state.beds}
          baths={this.state.baths}
          squareFeet={this.state.squareFeet}
          floor={this.state.floor}
          roomStyle={this.state.roomStyle}
          studyRooms={this.state.studyRooms}
          kitchen={this.state.kitchen}
          gym={this.state.gym}
          pool={this.state.pool}
          pets={this.state.pets}>
        </Review>


        {(this.state.currentStep !== 1 && this.state.currentStep !== 5) &&
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

        {this.state.currentStep === 5 &&
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

export default CreateApartmentListingForm
