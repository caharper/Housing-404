import React, { Component } from 'react';


export class Review extends React.Component {
  render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-success text-white">
          <h5>Review</h5>
        </div>
        <div className="card-body special-card">
          <div className="row justify-content-center">
            <p className="text-secondary mb-0">Please review your information before creating an account.</p>
          </div>

          <div className="row mb-1">
            <div className="col-6">
              <p>Your name: {this.props.name}</p>
            </div>
            <div className="col-6">
              <p>Your email:{this.props.email}</p>
            </div>

          </div>

          <div className="row mb-1">
            <div className="col-2">
              <p>Your gender:</p>
            </div>
            <div className="col-4">
              <p>{this.props.gender}</p>
            </div>

            <div className="col-2">
              <p>Smoker:</p>
            </div>
            <div className="col-4">
              <p>{this.props.smoker}</p>
            </div>

          </div>

          <div className="row mb-1">
            <div className="col-2">
              <p>Your year:</p>
            </div>
            <div className="col-4">
              <p>{this.props.year}</p>
            </div>

            <div className="col-2">
              <p>Pets:</p>
            </div>
            <div className="col-4">
              <p>{this.props.pets}</p>
            </div>

          </div>


          <div className="row mb-1">
            <div className="col-2">
              <p>Roommate smoker:</p>
            </div>
            <div className="col-4">
              <p>{this.props.smokerPref}</p>
            </div>

            <div className="col-2">
              <p>Roomate gender:</p>
            </div>
            <div className="col-4">
              <p>{this.props.generPref}</p>
            </div>

          </div>

          <div className="row mb-1">
            <div className="col-2">
              <p>Roommate tidyness:</p>
            </div>
            <div className="col-4">
              <p>{this.props.tidynessPref}</p>
            </div>

            <div className="col-2">
              <p>Roomate year:</p>
            </div>
            <div className="col-4">
              <p>{this.props.yearPref}</p>
            </div>

          </div>


        </div>
      </div>
    )
  }
}

export default Review
