import React, { Component } from 'react'

class ListApt extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="dropdown col-md-auto">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
              </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Smoking</label>
              </div>

              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Pets</label>
              </div>

              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Bedrooms</label>
              </div>
            </div>

          </div>
          <div className="col col-lg-2">
            List Result
              </div>
        </div>

      </div>
    );
  }
}

export default ListApt;
