import React, { PureComponent } from 'react';
import Navbar from './Navbar';

export default class Dashboard extends PureComponent {
  render() {
    return (
      <div>
      <Navbar />
        <div class="row">
          <div class="dropdown col-md-auto">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" for="customCheck1">Smoking</label>
              </div>

              <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" for="customCheck1">Pets</label>
              </div>

              <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" for="customCheck1">Bedrooms</label>
            </div>
            </div>
                      
              </div>
            <div class="col col-lg-2">
              Search Result
            </div>
        </div>
        
      </div>
    );
  }
}