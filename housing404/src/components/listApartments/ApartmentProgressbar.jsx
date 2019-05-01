import React from 'react'
import './apartmentListing.css'

export const ApartmentProgressBar = (props) => (

  <div className="progressContainer mb-4">
    <ul className="progressbar" id="progressbar">
      <li className="active ">Type of housing</li>
      <li>Housing details</li>
      <li>Floor plan</li>
      <li>Miscellaneous</li>
      <li>Review</li>
    </ul>
  </div>

);

export default ApartmentProgressBar
