import React, { Component } from 'react';


export class Review extends React.Component {
  render() {
    if (this.props.currentStep !== 5) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-success text-white">
          <h5>Review</h5>
        </div>
        <div className="card-body special-card">
          <div className="row">
            <div className="col-12">

              <div className="row">
                <div className="form-group col-12">
                  <div className="col-2">
                    Name:
                  </div>
                  <div className="col-6">
                    {this.props.name}
                  </div>
                </div>
                <div className="col-4">
                  {this.props.picture}
                </div>
              </div>

              <div className="row">
                <div className="form-group col-12">
                  <div className="col-2">
                    Email:
                  </div>
                  <div className="col-10">
                    {this.props.email}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-12">
                  <div className="col-2">
                    About:
                  </div>
                  <div className="col-10">
                    {this.props.about}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-12">
                  <div className="col-2">
                    Location:
                  </div>
                  <div className="col-10">
                    {this.props.address}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-12">
                  <div className="col-2">
                    Description:
                  </div>
                  <div className="col-10">
                    {this.props.roomDesc}
                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default Review
