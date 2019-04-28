import React, { Component } from 'react'
import { AccountRepository } from './../../api/accountRepository';
import { FilterRoommate } from './../../models/filterRoomate'
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
    temp: null,
    genderP: null,
    smokerP: null,
    tidynessP: null,
    tidynessP: null,
    yearP: null,
    bedtimeP: null,
    wakeTime: null,
    wakeTimeP: null
  }

  updateSmoker = (e) => {
    this.setState({ smokerP: e.target.value || null })
  }

  updateGender = (e) => {
    this.setState({ genderP: e.target.value || null })
  }
  updateYear = (e) => {
    this.setState({ yearP: e.target.value || null })
  }
  updatePets = (e) => {
    this.setState({ pets: e.target.value || null })
  }
  updateTidyness = (e) => {
    this.setState({ tidynessP: e.target.value || null })
  }

  filter() {
    // request server api call
    let filter = new FilterRoommate(
      this.state.genderP, this.state.smoker, this.state.smokerP, this.state.year, this.state.pets, this.state.tidynessP, this.state.tempP, this.state.yearP, this.state.bedtimeP, this.state.wakeTime, this.state.wakeTimeP)


    this.accountRepository.filterUsers(filter)
      .then(filterRoomate => {
        console.log(filterRoomate)
        this.setState({ filterRoomate })
      })
  }


  render() {

    if (this.state.items === [] || this.state.items === null) {
      return (
        <>No Match Found</>
      )
    }
    const { items, genderP, smokerP, yearP, pets, tidynessP } = this.state;

    return (
      <>
        <div><Navbar></Navbar></div>
        <div class="container">
          <div class="row">

            <div class="col-sm-3">
              <h1>Filter</h1>

              <div className="filter">
                <div className="filterTitle">Gender
              <button onClick={this.updateGender} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline" >
                  <input className="form-check-input" type="radio" name="gender" id="genderMale" checked={genderP === "M"}
                    value='M'
                    onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderMale">
                    Male
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="genderFemale"
                    checked={genderP === "F"}
                    value="F" onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderFemale">
                    Female
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="genderOther"
                    checked={genderP === "O"}
                    value="O" onChange={this.updateGender} />
                  <label className="form-check-label" htmlFor="genderOther">
                    Other
                </label>
                </div>
              </div>



              <div className="filter">
                <div className="filterTitle">Smoker
                <button onClick={this.updateSmoker} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="smoker" id="smokerYes"
                    checked={smokerP === '1'}
                    value={1} onChange={this.updateSmoker} />
                  <label className="form-check-label" htmlFor="smokerYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="smoker" id="smokerNo"
                    checked={smokerP === '0'}
                    value={0} onChange={this.updateSmoker} />
                  <label className="form-check-label" htmlFor="smokerNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <select className="custom-select" onChange={this.updateYear} value={yearP}>
                  <option value="">Year</option>
                  <option value={1}>Freshman</option>
                  <option value={2}>Sophmore</option>
                  <option value={3}>Junior</option>
                  <option value={4}>Senior</option>
                </select>
              </div>

              <div className="filter">
                <div className="filterTitle">Pet
                <button onClick={this.updatePets} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="pet" id="petYes"
                    checked={pets === '1'}
                    value={1} onChange={this.updatePets} />
                  <label className="form-check-label" htmlFor="petYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="pet" id="petNo"
                    checked={pets === '0'}
                    value={0} onChange={this.updatePets} />
                  <label className="form-check-label" htmlFor="petNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <select className="custom-select" onChange={this.updateTidyness} value={tidynessP}>
                  <option value="">Tidyness</option>
                  <option value={1}>Not Tiddy</option>
                  <option value={2}>Tidy</option>
                  <option value={3}>Very Tiddy</option>
                </select>
              </div>

              <button onClick={() => this.filter()} className="filterButton">Filter</button>

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
