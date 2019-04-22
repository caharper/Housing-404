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
        <div className="card-header">
          Personal Details
        </div>
        <div className="card-body">
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
                    <label htmlFor="about">Tell us about yourself</label>
                    <textarea type="text"
                           id="about"
                           name="about"
                           className="form-control"
                           placeholder="About you"
                           value={this.props.about} // Prop: The email input data
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

export default PersonalDetails
