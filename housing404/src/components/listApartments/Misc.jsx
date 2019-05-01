import React, { Component } from 'react';


export class Misc extends React.Component {
  render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <>
      <div className="card d-none d-lg-block overflow-auto">
        <div className="card-header bg-secondary text-white">
          <h3 className="font-weight-bold">Miscellaneous</h3>
        </div>

        <div className="card-body special-card text-left">
          <div className="row justify-content-center">
            <p className="text-secondary mb-0">Tell us more about your housing situation.</p>
          </div>



          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-misc-details">All information must be filled</p>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you have a gym?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="gym" id="gym" htmlFor="gym" value={this.props.gym} onChange={this.props.handleChange}>
                <option value=''>Gym</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you have a pool</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="pool" id="pool" htmlFor="pool" value={this.props.pool} onChange={this.props.handleChange}>
                <option value=''>Pool</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you allow pets?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="pets" id="pets" htmlFor="pets" value={this.props.pets} onChange={this.props.handleChange}>
                <option value=''>Pets</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>



        </div>

      </div>





      <div className="card small-card overflow-auto d-lg-none">
        <div className="card-header bg-secondary text-white">
          <h3 className="font-weight-bold">Miscellaneous</h3>
        </div>

        <div className="card-body special-card text-left">
          <div className="row justify-content-center">
            <p className="text-secondary mb-0">Tell us more about your housing situation.</p>
          </div>



          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-misc-details">All information must be filled</p>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you have a gym?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="gym" id="gym" htmlFor="gym" value={this.props.gym} onChange={this.props.handleChange}>
                <option value=''>Gym</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you have a pool</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="pool" id="pool" htmlFor="pool" value={this.props.pool} onChange={this.props.handleChange}>
                <option value=''>Pool</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>


          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>Do you allow pets?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="pets" id="pets" htmlFor="pets" value={this.props.pets} onChange={this.props.handleChange}>
                <option value=''>Pets</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>



        </div>

      </div>
      </>
    )
  }
}

export default Misc
