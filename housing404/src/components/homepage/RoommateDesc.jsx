import React, { Component } from 'react';


export class RoommateDesc extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-secondary text-white">
          <h5>Roommate Description</h5>
        </div>
        <div className="card-body special-card text-left">
          <div className="row">
            <div className="col-12">
              <form>

                <div className="row">
                  <div className="form-group">
                    <label htmlFor="smokerPref">
                    <input type="checkbox"
                           id="smokerPref"
                           name="smokerPref"
                           value={this.props.smokerPref}
                           />
                         Smoker
                    </label>
                  </div>
                </div>



                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="about">Year Preference</label>
                    <textarea type="text"
                           id="roomDesc"
                           name="roomDesc"
                           className="form-control"
                           placeholder="What do you want in a roommate?"
                           value={this.props.yearPref} // Prop: The email input data
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
