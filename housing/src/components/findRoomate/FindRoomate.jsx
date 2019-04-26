import React, { Component } from 'react'
import Navbar from "../Navbar";



class FindRoomate extends Component {

  state = {
    items: [
      {
        type: 'Apartment',
        name: "Haya", gender: "student", img: "https://via.placeholder.com/150"
      },
      {
        gender: 'female', type: 'house',
        name: "Bob", gender: "student", img: "https://via.placeholder.com/150"
      }
    ],
    gender: '',
    smoker: '',
    year: '',
    pets: '',
    tidyness: '',
    temperature: ''

  }

  updateSmoker = (e) => {
    this.setState({ smoker: e.type.value })
  }

  updateGender = (e) => {
    this.setState({ gender: e.target.value })
  }
  updateYear = (e) => {
    this.setState({ year: e.type.value })
  }
  updatePets = (e) => {
    this.setState({ pets: e.type.value })
  }
  updateTidyness = (e) => {
    this.setState({ tidyness: e.type.value })
  }

  
  filter = () => {
    // request server api call

  }

  archive = () => {
    // request server api call

  }

  render() {
    const { items, gender, smoker, year, pets, tidyness } = this.state;


    return (
      <>
        <div><Navbar></Navbar></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">

              <div>
                Gender
              <div className="form-check" >
                  <input className="form-check-input" type="radio" name="gender" id="genderMale" checked={gender === "male"}
                    value='male'
                    onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderMale">
                    Male
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="genderFemale"
                    checked={gender === "female"}
                    value="female" onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderFemale">
                    female
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="genderOther"
                    checked={gender === "other"}
                    value="other" onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderOther">
                    Other
                </label>
                </div>
                <button onClick={this.updateGender}>x</button>
              </div>


              <div>
                Smoker
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="smoker" id="smokerYes"
                    checked={smoker === "Yes"}
                    value="Yes" onChange={this.updateSmoker} />
                  <label className="form-check-label" htmlFor="smokerYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="smoker" id="smokerNo"
                    checked={smoker === "No"}
                    value="No" onChange={this.updateSmoker} />
                  <label className="form-check-label" htmlFor="smokerNo">
                    No
                </label>
                </div>
                <button onClick={this.updateSmoker}>x</button>
              </div>

              <select className="custom-select" onChange={this.updateYear} value={year}>
                <option value="">Year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophmore">Sophmore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Dorm">Dorm</option>
              </select>


              <div>
                Pet
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="pet" id="petYes"
                    checked={pets === "Yes"}
                    value="Yes" onChange={this.updatePets} />
                  <label className="form-check-label" htmlFor="petYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="pet" id="petNo"
                    checked={pets === "No"}
                    value="No" onChange={this.updatePets} />
                  <label className="form-check-label" htmlFor="petNo">
                    No
                </label>
                </div>
                <button onClick={this.updatePets}>x</button>
              </div>

              <div>
                Tidyness
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="tidyness" id="tidynessYes"
                    checked={tidyness === "Yes"}
                    value="Yes" onChange={this.updateTidyness} />
                  <label className="form-check-label" htmlFor="tidynessYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="tidyness" id="tidynessNo"
                    checked={tidyness === "No"}
                    value="No" onChange={this.updateTidyness} />
                  <label className="form-check-label" htmlFor="tidynessNo">
                    No
                </label>
                </div>
                <button onClick={this.updateTidyness}>x</button>
              </div>

              <button onClick={this.filter}>Filter</button>

            </div>

            <div className="col col-lg-8">
              {items.map(item => (
                <div>
                  <div>Name: {item.name}</div>
                  <div> Gender: {item.gender}</div>
                  <div> Smoker: {item.smoker}</div>
                  <div> Tidyness: {item.tidyness}</div>
                  <div> Smoker: {item.smoker}</div>
                  <div> Year: {item.yearP}</div>
                  <div> Pets: {item.pets}</div>
                  <div className="image searched">
                    <img src={item.img} />
                  </div>

                  <button onClick={this.remove}>Add to Archive</button>
                </div>
              ))}

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FindRoomate;
