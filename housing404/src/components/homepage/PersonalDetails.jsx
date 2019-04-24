import React, { Component } from 'react';
import $ from 'jquery';


export class PersonalDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
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
              <form>

                <div className="row">
                  <div className="form-group col-12">
                    <label htmlFor="picture">Add Profile Picture: </label>
                    <div className="previewComponent">
                      <form onSubmit={(e)=>this._handleSubmit(e)}>
                        <input className="fileInput"
                          value={this.props.picture}
                          type="file"
                          onChange={(e)=>this._handleImageChange(e)}/>
                      </form>
                      <div className="imgPreview">
                        {$imagePreview}
                      </div>
                  </div>



                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-12">
                    <select id="gender" value={this.props.gender}>
                      <option value="select">Select your gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
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

export default PersonalDetails
