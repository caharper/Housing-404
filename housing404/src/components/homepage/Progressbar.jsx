import React from 'react'
import './homepage.css'

export const ProgressBar = (props) => (

  <div className="progressContainerHome mb-4">
    <ul className="progressbarHome" id="progressbarHome">
      <li className="active">Login information</li>
      <li>Personal details</li>
      <li>Roommate description</li>
      <li>Review</li>
    </ul>
  </div>

);

export default ProgressBar
