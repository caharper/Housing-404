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

          <div className="row">
            <div className="col-3">
              <select className="form-control" name="smokerPref" id="smokerPref" value={this.props.smokerPref} onChange={this.props.handleChange}>
                <option value="select">Smoker</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            <div className="col-3">
              <select className="form-control" name="generPref" id="generPref" value={this.props.generPref} onChange={this.props.handleChange}>
                <option value="select">Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>

            <div className="col-3">
              <select className="form-control" name="tidynessPref" id="tidynessPref" value={this.props.tidynessPref} onChange={this.props.handleChange}>
                <option value="select">Tidy</option>
                <option value={1}>Not Tidy</option>
                <option value={2}>Tidy</option>
                <option value={3}>Very Tidy</option>
              </select>
            </div>

            <div className="col-3">
              <select className="form-control" name="yearPref" id="yearPref" value={this.props.yearPref} onChange={this.props.handleChange}>
                <option value="select">Year</option>
                <option value={1}>Freshman</option>
                <option value={2}>Sophomore</option>
                <option value={3}>Junior</option>
                <option value={4}>Senior</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RoommateDesc
