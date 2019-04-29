import React, { Component } from 'react';


export class ListingPicture extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
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
            <p className="incorrect incorrect-no-display" id="invalid-floor-details">All information must be filled</p>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>How many floors do you have?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="floor" id="floor" htmlFor="floor" value={this.props.floor} onChange={this.props.handleChange}>
                <option value=''>Floors</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>What are your room styles?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="roomStyle" id="roomStyle" htmlFor="roomStyle" value={this.props.roomStyle} onChange={this.props.handleChange}>
                <option value=''>Room style</option>
                <option value="1">Suite</option>
                <option value="2">Double</option>
              </select>
            </div>
          </div>

          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you have any study rooms?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="studyRooms" id="studyRooms" htmlFor="studyRooms" value={this.props.studyRooms} onChange={this.props.handleChange}>
                <option value=''>Study rooms</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you have a kitchen?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="kitchen" id="kitchen" htmlFor="kitchen" value={this.props.kitchen} onChange={this.props.handleChange}>
                <option value=''>Kitchen</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>



        </div>

      </div>

    )
  }
}

export default ListingPicture
