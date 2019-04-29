import React, { Component } from 'react';
import $ from 'jquery';


export class ListingDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }





  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }


    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-secondary text-white">
          <h3 className="font-weight-bold">Housing Details</h3>
        </div>

        <div className="card-body special-card text-left">
          <div className="row justify-content-center">
            <p className="text-secondary mb-0">Tell us more about your housing situation.</p>
          </div>



          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-apt-details">All information must be filled</p>
          </div>

          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>How many roommates can you accomodate?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="occupants" id="occupants" htmlFor="occupants" value={this.props.occupants} onChange={this.props.handleChange}>
                <option value=''>Occupants</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>How many bedrooms do you have?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="beds" id="beds" htmlFor="beds" value={this.props.beds} onChange={this.props.handleChange}>
                <option value=''>Beds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>How many bathrooms do you have?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="baths" id="baths" htmlFor="baths" value={this.props.baths} onChange={this.props.handleChange}>
                <option value=''>Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>How many square feet?</p>
            </div>
            <div className="col-7">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Square Feet</span>
                </div>
                <input type="text"
                       id="squareFeet"
                       name="squareFeet"
                       className="form-control"
                       aria-label="Amount (to the nearest dollar)"
                       onChange={this.props.handleChange}
                       value={this.props.squareFeet}
                       maxlength={4}/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-sq-ft">Square feet must be a number and greater than 0</p>
          </div>





        </div>

      </div>
    )
  }
}

export default ListingDetails
