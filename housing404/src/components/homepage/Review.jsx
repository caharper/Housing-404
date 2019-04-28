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



          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Your information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Your name: {this.props.name}</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>



          <div className="row justify-content-left pt-2 pl-4" id="review-user">
            <div className="row bg-secondary">
              <h6 className="">Your information:</h6>
            </div>
          </div>

          <div className="row">
            <p>Your name: {this.props.name}</p>
          </div>

          <div className="row">
            <p>Your email: {this.props.email}</p>
          </div>

          <div className="row">
            <p>Your gender: {this.props.gender}</p>
          </div>

          <div className="row">
            <p>Smoker: {this.props.smoker}</p>
          </div>

          <div className="row">
            <p>Year: {this.props.year}</p>
          </div>

          <div className="row">
            <p>Pets: {this.props.pets}</p>
          </div>

          <div className="row justify-content-left pt-2 pl-4 bg-secondary" id="review-roommate">
            <div className="row">
              <h6>Your ideal roommate:</h6>
            </div>
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
