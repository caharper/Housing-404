import React, { Component } from 'react'
import { AccountRepository } from './../../api/accountRepository';
import Navbar from "../Navbar";
import { FilterApt } from './../../models/filterApt'
import './findApt.css'


class FindApt extends Component {
  accountRepository = new AccountRepository;

  state = {
    items: [],
    type: null,
    year: null,
    squareFeet: null,
    bedrooms: null,
    bathrooms: null,
    occupants: null,
    rooms: null,
    floors: null,
    rent: null,
    kitchens: null,
    laundryRooms: null,
    studyRoom: null,
    pets: null,
    smoking: null,
    gym: null,
    pool: null,
    heat: null,
    airCondition: null,
    roomStyle: null,
    leaseTime: null,
    poBox: null,

    filteredApts: []

  }

  updateType = (e) => {
    this.setState({ type: e.target.value || null })
  }

  updateSquareFeet = (e) => {
    this.setState({ squareFeet: e.target.value || null })
  }

  updateYear = (e) => {
    this.setState({ year: e.target.value || null })
  }

  updateBedrooms = (e) => {
    this.setState({ bedrooms: e.target.value || null })
  }
  updateBathrooms = (e) => {
    this.setState({ bathrooms: e.target.value || null })
  }
  updateOccupants = (e) => {
    this.setState({ occupants: e.target.value || null })
  }
  updateRooms = (e) => {
    this.setState({ rooms: e.target.value || null })
  }
  updateFloors = (e) => {
    this.setState({ floors: e.target.value || null })
  }
  updateKitchens = (e) => {
    this.setState({ kitchens: e.target.value || null })
  }
  updateLaundryRooms = (e) => {
    this.setState({ laundryRooms: e.target.value || null })
  }
  updateStudyRoom = (e) => {
    this.setState({ studyRoom: e.target.value || null })
  }
  updatePets = (e) => {
    this.setState({ pets: e.target.value || null })
  }
  updateGym = (e) => {
    this.setState({ gym: e.target.value || null })
  }
  updateHeat = (e) => {
    this.setState({ heat: e.target.value || null })
  }
  updateAirCondition = (e) => {
    this.setState({ airCondition: e.target.value || null })
  }
  updateSmoking = (e) => {
    this.setState({ smoking: e.target.value || null })
  }
  updatePool = (e) => {
    this.setState({ pool: e.target.value || null })
  }
  updateRoomStyle = (e) => {
    this.setState({ roomStyle: e.target.value || null })
  }
  updateRoomRent = (e) => {
    this.setState({ rent: e.target.value || null })
  }


  filter() {
    // request server api call
    let filter = new FilterApt(this.state.type, this.state.bedrooms, this.state.year, this.state.squareFeet, this.state.bathrooms, this.state.occupants, this.state.rooms, this.state.floors, this.state.kitchens, this.state.studyRoom, this.state.pets, this.state.smoking, this.state.gym, this.state.pool, this.state.heat, this.state.airCondition, this.state.roomStyle, this.state.rent, this.state.leaseTime, this.state.poBox)


    this.accountRepository.filterApartments(filter)
      .then(filteredApts => {
        console.log(filteredApts)
        this.setState({ filteredApts })
      })
  }


  render() {
    const { items, type, bedrooms, year, squareFeet, bathrooms, occupants, rooms, floors, kitchens, laundryRooms, studyRoom, pets, smoking, gym, pool, roomStyle, rent } = this.state;


    return (
      <>
        <div><Navbar></Navbar></div>

        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h1>Filter</h1>

              <div className="filter">
                <select className="custom-select" onChange={this.updateType} value={type}>
                  <option value="">Type</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="TownHouse">TownHouse</option>
                  <option value="Condo">Condo</option>
                  <option value="Dorm">Dorm</option>
                </select>
              </div>
              <div className="filter">
                <select className="custom-select" onChange={this.updateYear} value={year}>
                  <option value="">Year</option>
                  <option value={1}>Freshman</option>
                  <option value={2}>Sophmore</option>
                  <option value={3}>Junior</option>
                  <option value={4}>Senior</option>
                </select>
              </div>


              <div className="filter">
                <div className="filterTitle">Bedrooms
                 <button onClick={this.updateBedrooms} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline" >
                  <input className="form-check-input" type="radio" name="bedroom" id="bedroom1" checked={bedrooms === "1"}
                    value={1}
                    onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom1">
                    1
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="bedroom" id="bedroom2"
                    checked={bedrooms === '2'}
                    value={2} onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom2">
                    2
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="bedroom" id="bedroom3"
                    checked={bedrooms === '3'}
                    value={3} onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom3">
                    3
                </label>
                </div>

              </div>


              <div className="filter">
                <div className="filterTitle"> Bathrooms
                <button onClick={this.updateBathrooms} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline" >
                  <input className="form-check-input" type="radio" name="bathroom" id="bathroom" checked={bathrooms === "1"}
                    value={1}
                    onChange={this.updateBathrooms} />
                  <label className="form-check-label" htmlFor="bathroom1">
                    1
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="bathroom" id="bathroom2"
                    checked={bathrooms === "2"}
                    value={2} onChange={this.updateBathrooms} />
                  <label className="form-check-label" htmlFor="bathroom2">
                    2
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="bathroom" id="bathroom3"
                    checked={bathrooms === "3"}
                    value={3} onChange={this.updateBathrooms} />
                  <label className="form-check-label" htmlFor="bathroom3">
                    3
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle"> Number of occupants
                <button onClick={this.updateOccupants} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline" >
                  <input className="form-check-input" type="radio" name="occupant" id="occupant" checked={occupants === '1'}
                    value={1}
                    onChange={this.updateOccupants} />
                  <label className="form-check-label" htmlFor="occupant1">
                    1
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="occupant" id="occupant2"
                    checked={occupants === '2'}
                    value={2} onChange={this.updateOccupants} />
                  <label className="form-check-label" htmlFor="occupant2">
                    2
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="occupant" id="occupant3"
                    checked={occupants === '3'}
                    value={3} onChange={this.updateOccupants} />
                  <label className="form-check-label" htmlFor="occupant3">
                    3
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle"> Rooms
                <button onClick={this.updateRooms} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline" >
                  <input className="form-check-input" type="radio" name="room" id="room" checked={rooms === '1'}
                    value={1}
                    onChange={this.updateRooms} />
                  <label className="form-check-label" htmlFor="room1">
                    1
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="room" id="room2"
                    checked={rooms === '2'}
                    value={2} onChange={this.updateRooms} />
                  <label className="form-check-label" htmlFor="room2">
                    2
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="room" id="room3"
                    checked={rooms === '3'}
                    value={3} onChange={this.updateRooms} />
                  <label className="form-check-label" htmlFor="room3">
                    3
                </label>
                </div>

              </div>

              <div className="filter">
                <div className="filterTitle">Number of Floors
                <button onClick={this.updateFloors} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="floor" id="floor1"
                    checked={floors === '1'}
                    value={1} onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor1">
                    1
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="floor" id="floor2"
                    checked={floors === '2'}
                    value={2} onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor2">
                    2
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="floor" id="floor3"
                    checked={floors === '3'}
                    value={3} onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor3">
                    3
                </label>
                </div>

              </div>

              <div className="filter">
                <select className="custom-select" onChange={this.updateRoomStyle} value={roomStyle}>
                  <option value="">Room Style</option>
                  <option value="Suite">Suite</option>
                  <option value="Double">Double</option>
                </select>
              </div>

              <div className="filter">
                <div className="filterTitle">Kitchens
                <button onClick={this.updateKitchens} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="kitchen" id="kitchenYes"
                    checked={kitchens === '1'}
                    value={1} onChange={this.updateKitchens} />
                  <label className="form-check-label" htmlFor="kitchenYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="kitchen" id="kitchenNo"
                    checked={kitchens === '2'}
                    value={2} onChange={this.updateKitchens} />
                  <label className="form-check-label" htmlFor="kitchenNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Laundry Room
                <button onClick={this.updateLaundryRooms} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="laundryRoom" id="laundryRoomYes"
                    checked={laundryRooms === '1'}
                    value={1} onChange={this.updateLaundryRooms} />
                  <label className="form-check-label" htmlFor="laundryRoomYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="laundryRoom" id="laundryRoomNo"
                    checked={laundryRooms === '2'}
                    value={2} onChange={this.updateLaundryRooms} />
                  <label className="form-check-label" htmlFor="laundryRoomNo">
                    No
                </label>
                </div>
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
                    checked={pets === '2'}
                    value={2} onChange={this.updatePets} />
                  <label className="form-check-label" htmlFor="petNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Smoking
                <button onClick={this.updateSmoking} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="smoking" id="smokingYes"
                    checked={smoking === '1'}
                    value={1} onChange={this.updateSmoking} />
                  <label className="form-check-label" htmlFor="smokingYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="smoking" id="smokingNo"
                    checked={smoking === '2'}
                    value={2} onChange={this.updateSmoking} />
                  <label className="form-check-label" htmlFor="smokingNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Pool
                <button onClick={this.updatePool} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="pool" id="poolYes"
                    checked={pool === '1'}
                    value={1} onChange={this.updatePool} />
                  <label className="form-check-label" htmlFor="poolYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="pool" id="poolNo"
                    checked={pool === '2'}
                    value={2} onChange={this.updatePool} />
                  <label className="form-check-label" htmlFor="poolNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Gym
                <button onClick={this.updateGym} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gym" id="gymYes"
                    checked={gym === '1'}
                    value={1} onChange={this.updateGym} />
                  <label className="form-check-label" htmlFor="gymYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gym" id="gymNo"
                    checked={gym === '2'}
                    value={2} onChange={this.updateGym} />
                  <label className="form-check-label" htmlFor="gymNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Study Room
                <button onClick={this.updatestudyRoom} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="studyRoom" id="studyRoomYes"
                    checked={studyRoom === '1'}
                    value={1} onChange={this.updateStudyRoom} />
                  <label className="form-check-label" htmlFor="studyRoomYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="studyRoom" id="studyRoomNo"
                    checked={studyRoom === '2'}
                    value={2} onChange={this.updateStudyRoom} />
                  <label className="form-check-label" htmlFor="StudyRoomNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" onChange={this.updateSqureFeet} value={squareFeet}>SquareFeet</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                </div>
              </div>

              <div className="filter">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" onChange={this.updateRent} value={rent}>Rent</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
              </div>

              <button onClick={() => this.filter()} className="filterButton">Filter</button>
            </div>


            <div className="col col-lg-8">
              <h1 >Search Results</h1>
              <div className="searchResultback">
                <div>
                  {items.map(item => (
                    <div className="searchResult" >
                      <div className="row">

                        <div class="col col-mg-3 img">
                          <div className="imageSearched">
                            <img src={item.img} />
                          </div>
                        </div>

                        <div className="col col-mg-8 items">
                          <div>Name:{item.type}</div>
                          <div> Type:{item.type}</div>
                          <div> Description:{item.description}</div>
                          <div> Location:{item.location}</div>
                          <div> Rent:{item.rent}</div>
                          <div> Avalibility:{item.leaseTime}</div>
                          <div> Number of occupants:{item.occupants}</div>
                          <div> Number of Bedrooms:{item.beds}</div>
                          <div> Number of Bathrooms:{item.baths}</div>
                          <div> Sqaure Feet:{item.squareFeet}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </>

    );
  }
}

export default FindApt;
