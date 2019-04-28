import React, { Component } from 'react'
import { AccountRepository } from './../../api/accountRepository';

import Navbar from "../Navbar";



class FindRoomate extends Component {
  accountRepository = new AccountRepository;


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
    gender: null,
    smoker: null,
    year: null,
    pets: null,
    tidyness: null,
    temperature: null

  }

  updateSmoker = (e) => {
    this.setState({ smoker: e.type.value || null })
  }

  updateGender = (e) => {
    this.setState({ gender: e.target.value || null })
  }
  updateYear = (e) => {
    this.setState({ year: e.type.value|| null })
  }
  updatePets = (e) => {
    this.setState({ pets: e.type.value|| null })
  }
  updateTidyness = (e) => {
    this.setState({ tidyness: e.type.value|| null })
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
            <h1>Filter</h1>
             
              <div>
                <div className="filterTitle">Gender
              <button onClick={this.updateGender} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline" >
                  <input className="form-check-input" type="radio" name="gender" id="genderMale" checked={gender === "M"}
                    value='M'
                    onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderMale">
                    Male
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="genderFemale"
                    checked={gender === "F"}
                    value="F" onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderFemale">
                    Female
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="genderOther"
                    checked={gender === "O"}
                    value="O" onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderOther">
                    Other
                </label>
                </div>
              </div>


              <div>
                <div className="filterTitle"> Smoker
                <button onClick={this.updateSmoker} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="smoker" id="smokerYes"
                    checked={smoker === "Yes"}
                    value={1} onChange={this.updateSmoker} />
                  <label className="form-check-label" htmlFor="smokerYes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="smoker" id="smokerNo"
                    checked={smoker === "No"}
                    value={2} onChange={this.updateSmoker} />
                  <label className="form-check-label" htmlFor="smokerNo">No</label>
                </div>
              </div>

              <select className="custom-select" onChange={this.updateYear} value={year}>
                <option value="">Year</option>
                <option value={1}>Freshman</option>
                <option value={2}>Sophmore</option>
                <option value={3}>Junior</option>
                <option value={4}>Senior</option>
              </select>


              <div>
                <div className="filterTitle">Pet
                <button onClick={this.updatePets} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="pet" id="petYes"
                    checked={pets === "Yes"}
                    value={1} onChange={this.updatePets} />
                  <label className="form-check-label" htmlFor="petYes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="pet" id="petNo"
                    checked={pets === "No"}
                    value={2} onChange={this.updatePets} />
                  <label className="form-check-label" htmlFor="petNo">No</label>
                </div>
              </div>

              
              <select className="custom-select" onChange={this.updateTidyness} value={year}>
                <option value="">Tidyness</option>
                <option value={1}>Not Tiddy</option>
                <option value={2}>Tidy</option>
                <option value={3}>Very Tiddy</option>
              </select>
              
              <button onClick={this.filter} className="filterButton">Filter</button>

            </div>

            <div className="col col-lg-8">
              <h1 >Search Results</h1>
              <div className="searchResultback">
                {items.map(item => (
                  <div className="searchResult" >
                    <div className="row">

                      <div class="col col-mg-3 img">
                        <div className="imageSearched">
                          <img src={item.img} />
                        </div>

                      </div>
                      <div className="col col-mg-8 items">
                        <div>Name: {item.name}</div>
                        <div> Gender: {item.gender}</div>
                        <div> Smoker: {item.smoker}</div>
                        <div> Tidyness: {item.tidyness}</div>
                        <div> Smoker: {item.smoker}</div>
                        <div> Year: {item.yearP}</div>
                        <div> Pets: {item.pets}</div>

                        <button onClick={this.archive} className="addToArchive">Add to Archive</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </>
    );
  }
}

export default FindRoomate;
