import React from 'react'
import './homepage.css'

export const ProgressBar = (props) => (

  <div className="progressContainerHome mb-4">
    <ul className="progressbarHome" id="progressbarHome">
      <li className="active">Create Account</li>
      <li>Personal details</li>
      <li>Roommate description</li>
      <li>Review details</li>
    </ul>
  </div>

);

export default ProgressBar
