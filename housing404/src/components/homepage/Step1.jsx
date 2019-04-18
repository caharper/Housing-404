import React, { Component } from 'react';


export class Step1 extends React.Component {
  render() {

    // The markup for the Step 1 UI
    return(
      <div className="card">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <form>
                <div>
                  <div className="row">
                    <div className="form-group col-8">
                      <label htmlFor="userName">Your Name</label>
                      <input type="text"
                             id="userName"
                             name="userName"
                             className="form-control"
                             />
                    </div>


                    <div className="form-group col-2">
                      <label htmlFor="rating">Rating</label>
                      <select type="number"
                             id="rating"
                             name="rating"
                             className="form-control"
                             >
                             // options
                             <option></option>
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                      </select>
                    </div>
                  </div>


                </div>
                  <div className="form-group ">
                    <label htmlFor="comment">Comment</label>
                    <textarea type="textarea"
                           id="comment"
                           name="comment"
                           className="form-control"
                           >
                     </textarea>
                  </div>
              </form>
            </div>
          </div>


          <div className="row">
            <div className="col-12">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>






        </div>
      </div>
    )
  }
}

export default Step1
