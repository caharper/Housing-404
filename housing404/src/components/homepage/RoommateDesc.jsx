import React, { Component } from 'react';


export class RoommateDesc extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header">
          Roommate Description
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <form>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="about">Location Description</label>
                    <textarea type="text"
                           id="address"
                           name="address"
                           className="form-control"
                           placeholder="Location Description"
                           value={this.props.address} // Prop: The email input data
                           onChange={this.props.handleChange} // Prop: Puts data into state
                           />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="about">What do you want in a roommate?</label>
                    <textarea type="text"
                           id="roomDesc"
                           name="roomDesc"
                           className="form-control"
                           placeholder="What do you want in a roommate?"
                           value={this.props.roomDesc} // Prop: The email input data
                           onChange={this.props.handleChange} // Prop: Puts data into state
                           />
                  </div>
                </div>

              </form>
            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default RoommateDesc
