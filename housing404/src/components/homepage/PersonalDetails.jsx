import React, { Component } from 'react';
import $ from 'jquery';


export class PersonalDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  state = {
    pic: ''
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

    // Convert the picture to blob
    this.props.onPhotoUpload(new Blob([file]));

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
                <div className="imgPreview">
                  {$imagePreview}
                </div>

                <div class="custom-file">
                  <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="custom-file-input"
                      value={this.state.pic}
                      type="file"
                      id="validatedCustomFile"
                      required
                      onChange={(e)=>this._handleImageChange(e)}/>
                  </form>
                  <label className="custom-file-label" for="validatedCustomFile">Choose file...</label>
                  <div className="invalid-feedback">Example invalid custom file feedback</div>
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
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default PersonalDetails
