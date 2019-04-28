import React, { Component } from 'react';


export class RoommateDesc extends React.Component {

  state = {
    wakeHour: 0,
    wakeMin: 0
  }
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-secondary text-white">
          <h5>Roommate Description</h5>
        </div>
        <div className="card-body special-card text-left">

          <div className="row justify-content-center">
            <p className="text-secondary mb-0">What do you prefer in a roommate?</p>
          </div>

          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-roommate-details">All information must be filled</p>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you want your roommate to be a smoker?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="smokerPref" id="smokerPref" value={this.props.smokerPref} onChange={this.props.handleChange}>
                <option>Smoker</option>
                <option value={+1}>Yes</option>
                <option value={+0}>No</option>
              </select>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-5">
              <p>What do you want your roommate's gender to be?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="generPref" id="generPref" value={this.props.generPref} onChange={this.props.handleChange}>
                <option>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-5">
              <p>How tidy do you want your roommate to be?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="tidynessPref" id="tidynessPref" value={this.props.tidynessPref} onChange={this.props.handleChange}>
                <option>Tidyness</option>
                <option value={+1}>Not Tidy</option>
                <option value={+2}>Tidy</option>
                <option value={+3}>Very Tidy</option>
              </select>
            </div>
          </div>


          <div className="row mb-1">
            <div className="col-5">
              <p>What year do you want your roommate to be?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="yearPref" id="yearPref" value={this.props.yearPref} onChange={this.props.handleChange}>
                <option>Year</option>
                <option value={+1}>Freshman</option>
                <option value={+2}>Sophomore</option>
                <option value={+3}>Junior</option>
                <option value={+4}>Senior</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default RoommateDesc
