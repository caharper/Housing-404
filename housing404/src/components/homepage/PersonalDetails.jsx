import React, { Component } from 'react';
import $ from 'jquery';


export class PersonalDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  state = {
    wakeHour: 0,
    wakeMin: 0,
    sleepHour: 0,
    sleepMin: 0
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
    $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<img src="http://placehold.it/65" />);
    }

    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-secondary text-white">
          <h5>Personal Details</h5>
        </div>
        <div className="card-body special-card text-left">
          <div className="row">
            <div className="col-12">

              <div className="row">
                <div className="form-group col-6">
                  <label htmlFor="picture">Add Profile Picture: </label>
                  <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput"
                      value={this.props.picture}
                      type="file"
                      onChange={(e)=>this._handleImageChange(e)}/>
                  </form>
                </div>
                <div className="col-6">
                  <div className="imgPreview">
                    {$imagePreview}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="">
                  Tell us about you
                  <div className="row">
                    <div className="col-3">

                      <select className="form-control" name="gender" id="gender" htmlFor="gender" value={this.props.gender} onChange={this.props.handleChange}>
                        <option value="select">Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                      </select>
                    </div>
                    <div className="col-3">
                      <select className="form-control" name="smoker" id="smoker" value={this.props.smoker} onChange={this.props.handleChange}>
                        <option value="selected">Smoker</option>
                        <option value={1}>Yes</option>
                        <option value={0}>No</option>
                      </select>
                    </div>

                    <div className="col-3">
                      <select className="form-control" id="year" name="year" value={this.props.year} onChange={this.props.handleChange}>
                        <option value="select">Year</option>
                        <option value={1}>Freshman</option>
                        <option value={2}>Sophomore</option>
                        <option value={3}>Junior</option>
                        <option value={4}>Senior</option>
                      </select>
                    </div>
                    <div className="col-3">
                      <select className="form-control" id="pets" name="pets" value={this.props.pets} onChange={this.props.handleChange}>
                        <option value="select">Pets</option>
                        <option value="y">Yes</option>
                        <option value="n">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <p>What temperature do you like?</p>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-12">
                      <input type="text"
                             id=""
                             name="tempPref"
                             className="form-control"
                             placeholder="Temp"
                             value={this.props.tempPref} // Prop: The email input data
                             onChange={this.props.handleChange} // Prop: Puts data into state
                             />
                      </div>
                    </div>
                  </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <p>What time do you like to wake up?</p>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-5">
                      <input type="text"
                             id=""
                             name=""
                             className="form-control"
                             placeholder="Hour"
                             value={this.state.wakeHour} // Prop: The email input data
                             onChange={e => this.setState({wakeHour: e.target.value})} // Prop: Puts data into state
                             />
                      </div>
                      <div className="col-2">
                        <p>:</p>
                      </div>
                      <div className="col-5">
                        <input type="text"
                               id=""
                               name=""
                               className="form-control"
                               placeholder="Minute"
                               value={this.state.wakeMin} // Prop: The email input data
                               onChange={e => this.setState({wakeMin: e.target.value})} // Prop: Puts data into state
                               />
                      </div>
                    </div>
                  </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <p>What time do you like to go to bed?</p>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-5">
                      <input type="text"
                             id=""
                             name=""
                             className="form-control"
                             placeholder="Hour"
                             value={this.state.sleepHour} // Prop: The email input data
                             onChange={e => this.setState({sleepHour: e.target.value})} // Prop: Puts data into state
                             />
                      </div>
                      <div className="col-2">
                        <p>:</p>
                      </div>
                      <div className="col-5">
                        <input type="text"
                               id=""
                               name=""
                               className="form-control"
                               placeholder="Minute"
                               value={this.state.sleepMin} // Prop: The email input data
                               onChange={e => this.setState({sleepMin: e.target.value})} // Prop: Puts data into state
                               />
                      </div>
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

export default PersonalDetails
