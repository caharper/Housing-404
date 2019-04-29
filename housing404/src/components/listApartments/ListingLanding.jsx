import React, { Component } from 'react';
// import './homepage.css';


export class ListingLanding extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-secondary text-white">
          <h3 className="font-weight-bold">Create a listing</h3>
        </div>

        <div className="card-body special-card text-left">
          <div className="row justify-content-center">
            <p className="text-secondary mb-0">Tell us about your housing situation.</p>
          </div>



          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-personal-details">All information must be filled</p>
          </div>


          <div className="row mb-1">
            <div className="col-5">
              <p>How much is your rent?</p>
            </div>
            <div className="col-7">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Rent</span>
                </div>
                <input type="text"
                       id="rent-enter"
                       name="rent"
                       className="form-control"
                       aria-label="Amount (to the nearest dollar)"
                       onChange={this.props.handleChange}
                       value={this.props.rent}
                       maxlength="4"/>
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-rent">Rent value must be a number and greater than 0</p>
          </div>


          <div className="row my-0 py-0">
            <div className="form-group col-12 m-0">
              <label htmlFor="location">Where is your housing?</label>
              <input type="text"
                     id="location-enter"
                     name="location"
                     className="form-control"
                     placeholder="Location"
                     maxLength={50}
                     value={this.props.location} // Prop: The name input data
                     onChange={this.props.handleChange} // Prop: Puts data into state
                      />
            </div>
          </div>
          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-location">Please enter a location</p>
          </div>


          <div className="row">
              <div className="form-group w-100 ">
                <label htmlFor="description">Describe your housing</label>
                <textarea type="textarea"
                       id="description-enter"
                       name="description"
                       maxlength={50}
                       className="form-control"
                       value={this.props.description}
                       onChange={this.props.handleChange}>
                 </textarea>
              </div>

          </div>
          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-description-apt">Please provide a description</p>
          </div>

        </div>

      </div>
    )
  }
}

export default ListingLanding
