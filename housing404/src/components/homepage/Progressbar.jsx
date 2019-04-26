import React from 'react'
import './homepage.css'

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
