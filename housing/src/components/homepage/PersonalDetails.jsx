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
    let blb = new Blob([file]);

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)

    let blbString = reader.readAsText(blb);
    this.props.onPhotoUpload(blbString);
  }

  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
    $imagePreview = (<img className="rounded-circle prof-pic imgPreview" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<img className="rounded-circle prof-pic imgPreview" src="http://placehold.it/65" />);
    }

    // The markup for the Step 1 UI
    return(

      <div className="card overflow-auto">
        <div className="card-header bg-secondary text-white">
          <h5>Personal Details</h5>
        </div>
        <div className="card-body special-card text-left">
          <div className="row justify-content-center">
            <p className="text-secondary mb-0">Tell us about yourself.</p>
          </div>


          <div className="row img-prev justify-content-center mb-1">
            <div className="imgPreview">
              {$imagePreview}
            </div>
          </div>

          <div className="custom-file">
            <form onSubmit={(e)=>this._handleSubmit(e)}>
              <input className="custom-file-input"
                value={this.state.pic}
                type="file"
                id="validatedCustomFile"
                required
                onChange={(e)=>this._handleImageChange(e)}/>
            </form>
            <label className="custom-file-label" htmlFor="validatedCustomFile">Choose a profile picture...</label>
            <div className="invalid-feedback">Example invalid custom file feedback</div>
          </div>

          <div className="row justify-content-center py-0 my-0">
            <p className="incorrect incorrect-no-display" id="invalid-personal-details">All information must be filled</p>
          </div>

          <div className="row mb-1 mt-2">
            <div className="col-5">
              <p>What is your gender?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="gender" id="gender" htmlFor="gender" value={this.props.gender} onChange={this.props.handleChange}>
                <option value=''>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </div>
          </div>


          <div className="row mb-1">
            <div className="col-5">
              <p>Are you a smoker?</p>
            </div>
            <div className="col-7">
              <select className="form-control" name="smoker" id="smoker" value={this.props.smoker} onChange={this.props.handleChange}>
                <option value=''>Smoker</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-5">
              <p>What year are you?</p>
            </div>
            <div className="col-7">
              <select className="form-control" id="year" name="year" value={this.props.year} onChange={this.props.handleChange}>
                <option value=''>Year</option>
                <option value={1}>Freshman</option>
                <option value={2}>Sophomore</option>
                <option value={3}>Junior</option>
                <option value={4}>Senior</option>
              </select>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-5">
              <p>Do you have any pets?</p>
            </div>
            <div className="col-7">
              <select className="form-control" id="pets" name="pets" value={this.props.pets} onChange={this.props.handleChange}>
                <option value=''>Pets</option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default PersonalDetails
