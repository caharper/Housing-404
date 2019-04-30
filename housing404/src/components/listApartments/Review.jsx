import React, { Component } from 'react';


export class Review extends React.Component {
  render() {
    if (this.props.currentStep !== 5) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(

      <>
      <div className="card d-none d-lg-block overflow-auto">
        <div className="card-header bg-success text-white">
          <h5>Review</h5>
        </div>
        <div className="card-body special-card">
          <div className="row">
            <div className="col-12">

              <div className="row justify-content-center">
                <p className="text-secondary mb-0">Please review your information before creating a listing.</p>
              </div>



              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-left">Listing information</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Location:</td>
                    <td className="text-right">{this.props.location}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Rent:</td>
                    <td className="text-right">${this.props.rent}.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">Occupants:</td>
                    <td className="text-right">{this.props.occupants}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Beds:</td>
                    <td className="text-right">{this.props.beds}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Square Feet:</td>
                    <td className="text-right">{this.props.squareFeet}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Floors:</td>
                    <td className="text-right">{this.props.floor}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Kitchen:</td>
                    <td className="text-right">{this.props.kitchen === "1" ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Gym:</td>
                    <td className="text-right">{this.props.gym === "1" ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Pool:</td>
                    <td className="text-right">{this.props.pool === "1" ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Pets:</td>
                    <td className="text-right">{this.props.pets === "1" ? "Yes" : "No"}</td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>





      <div className="card small-card overflow-auto d-lg-none">
        <div className="card-header bg-success text-white">
          <h5>Review</h5>
        </div>
        <div className="card-body special-card">
          <div className="row">
            <div className="col-12">

              <div className="row justify-content-center">
                <p className="text-secondary mb-0">Please review your information before creating a listing.</p>
              </div>



              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-left">Listing information</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">Location:</td>
                    <td className="text-right">{this.props.location}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Rent:</td>
                    <td className="text-right">${this.props.rent}.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">Occupants:</td>
                    <td className="text-right">{this.props.occupants}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Beds:</td>
                    <td className="text-right">{this.props.beds}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Square Feet:</td>
                    <td className="text-right">{this.props.squareFeet}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Floors:</td>
                    <td className="text-right">{this.props.floor}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Kitchen:</td>
                    <td className="text-right">{this.props.kitchen === "1" ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Gym:</td>
                    <td className="text-right">{this.props.gym === "1" ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Pool:</td>
                    <td className="text-right">{this.props.pool === "1" ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Pets:</td>
                    <td className="text-right">{this.props.pets === "1" ? "Yes" : "No"}</td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </>

    )
  }
}

export default Review
