import React from 'react'
import './sign_up.css'

export const ProgressBar = (props) => (

  <div className="progressContainer mb-4">
    <ul className="progressbar" id="progressbar">
      <li className="active">Login information</li>
      <li>Personal details</li>
      <li>Roommate description</li>
      <li>Review</li>
    </ul>
  </div>

);

export default ProgressBar
