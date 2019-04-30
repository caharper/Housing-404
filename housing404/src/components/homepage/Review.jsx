import React, { Component } from 'react';


export class Review extends React.Component {
  render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }

    let gender = '';

    if(this.props.gender === "M"){
      gender = "Male";
    }
    else if (this.props.gender === "F") {
      gender = "Female";
    }
    else {
      gender = "Other";
    }

    let rGender = '';

    if(this.props.generPref === "M"){
      rGender = "Male";
    }
    else if (this.props.generPref === "F") {
      rGender = "Female";
    }
    else {
      rGender = "Other";
    }

    let year = '';

    if(this.props.year == "1"){
      year = "Freshman";
    }
    else if (this.props.year == "2") {
      year = "Sophomore";
    }
    else if (this.props.year == "3") {
      year = "Junior";
    }
    else {
      year = "Senior";
    }

    let rYear = '';

    if(this.props.yearPref == "1"){
      rYear = "Freshman";
    }
    else if (this.props.yearPref == "2") {
      rYear = "Sophomore";
    }
    else if (this.props.yearPref == "3") {
      rYear = "Junior";
    }
    else {
      rYear = "Senior";
    }

    let tidyness = '';

    if(this.props.tidynessPref == "1"){
      tidyness = "Not Tidy";
    }
    else if (this.props.tidynessPref == "2") {
      tidyness = "Tidy";
    }
    else {
      tidyness = "Very Tidy";
    }

    // The markup for the Step 1 UI
    return(
      <>
      <div className="card d-none d-lg-block overflow-auto">
        <div className="card-header bg-success text-white">
          <h5>Review</h5>
        </div>
        <div className="card-body special-card">
          <div className="row justify-content-center">
            <p className="text-secondary mb-0">Please review your information before creating an account.</p>
          </div>



          <table className="table">
            <thead className="thead-light">
              <tr>
                <th className="text-left">Your information</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">Name:</td>
                <td className="text-right">{this.props.name}</td>
              </tr>
              <tr>
                <td className="text-left">Email:</td>
                <td className="text-right">{this.props.email}</td>
              </tr>
              <tr>
                <td className="text-left">Gender:</td>
                <td className="text-right">{gender}</td>
              </tr>
              <tr>
                <td className="text-left">Smoker:</td>
                <td className="text-right">{this.props.smoker === "1" ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="text-left">Year:</td>
                <td className="text-right">{year}</td>
              </tr>
              <tr>
                <td className="text-left">Pets:</td>
                <td className="text-right">{this.props.pets == "y" ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>

          <table className="table">
            <thead className="thead-light">
              <tr>
                <th className="text-left">Desired Roommate Description</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">Roommate Smoker:</td>
                <td className="text-right">{this.props.smokerPref === "1" ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="text-left">Roommate Gender:</td>
                <td className="text-right">{rGender}</td>
              </tr>
              <tr>
                <td className="text-left">Roommate Tidyness:</td>
                <td className="text-right">{tidyness}</td>
              </tr>
              <tr>
                <td className="text-left">Roommate Year:</td>
                <td className="text-right">{rYear}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>







      <div className="card small-card overflow-auto d-lg-none">
        <div className="card-header bg-success text-white">
          <h5>Review</h5>
        </div>
        <div className="card-body special-card">
          <div className="row justify-content-center">
            <p className="text-secondary mb-0">Please review your information before creating an account.</p>
          </div>



          <table className="table">
            <thead className="thead-light">
              <tr>
                <th className="text-left">Your information</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">Name:</td>
                <td className="text-right">{this.props.name}</td>
              </tr>
              <tr>
                <td className="text-left">Email:</td>
                <td className="text-right">{this.props.email}</td>
              </tr>
              <tr>
                <td className="text-left">Gender:</td>
                <td className="text-right">{gender}</td>
              </tr>
              <tr>
                <td className="text-left">Smoker:</td>
                <td className="text-right">{this.props.smoker === "1" ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="text-left">Year:</td>
                <td className="text-right">{year}</td>
              </tr>
              <tr>
                <td className="text-left">Pets:</td>
                <td className="text-right">{this.props.pets == "y" ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>

          <table className="table">
            <thead className="thead-light">
              <tr>
                <th className="text-left">Desired Roommate Description</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">Roommate Smoker:</td>
                <td className="text-right">{this.props.smokerPref === "1" ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td className="text-left">Roommate Gender:</td>
                <td className="text-right">{rGender}</td>
              </tr>
              <tr>
                <td className="text-left">Roommate Tidyness:</td>
                <td className="text-right">{tidyness}</td>
              </tr>
              <tr>
                <td className="text-left">Roommate Year:</td>
                <td className="text-right">{rYear}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      </>
    )
  }
}

export default Review
