import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository';
import Navbar from "../Navbar";
import { FilterApt } from './../../models/filterApt';
import './findApt.css';
import $ from 'jquery';


class FindApt extends Component {
  accountRepository = new AccountRepository;

  state = {

    rent: null,
    leaseTime: null,
    occupants: null,
    beds: null,
    baths: null,
    squareFeet: null,
    rooms: null,
    kitchen: null,
    floor: null,
    pets: null,
    poBox: null,
    studyRooms: null,
    gym: null,
    pool: null,
    ac: null,
    heat: null,

    filteredApts: []

  }

  // updateType = (e) => {
  //   this.setState({ type: e.target.value || null })
  // }
  // updateYear = (e) => {
  //   this.setState({ year: e.target.value || null })
  // }
  updateBedrooms = (e) => {
    this.setState({ beds: e.target.value || null })
  }
  updateBathrooms = (e) => {
    this.setState({ baths: e.target.value || null })
  }
  updateOccupants = (e) => {
    this.setState({ occupants: e.target.value || null })
  }
  updateRooms = (e) => {
    this.setState({ rooms: e.target.value || null })
  }
  updateFloors = (e) => {
    this.setState({ floor: e.target.value || null })
  }
  updateKitchens = (e) => {
    this.setState({ kitchen: e.target.value || null })
  }
  // updateLaundryRooms = (e) => {
  //   this.setState({ laundryRooms: e.target.value || null })
  // }
  updateStudyRoom = (e) => {
    this.setState({ studyRooms: e.target.value || null })
  }
  updatePets = (e) => {
    this.setState({ pets: e.target.value || null })
  }
  updateGym = (e) => {
    this.setState({ gym: e.target.value || null })
  }
  // updateSmoking = (e) => {
  //   this.setState({ smoking: e.target.value || null })
  // }
  updatePool = (e) => {
    this.setState({ pool: e.target.value || null })
  }
  // updateRoomStyle = (e) => {
  //   this.setState({ roomStyle: e.target.value || null })
  // }
  updateRent = (e) => {
    this.setState({ rent: e.target.value || null })
  }
  updateSqureFeet = (e) => {
    this.setState({ squareFeet: e.target.value || null })
  }


  filter() {
    // request server api call
    let filter = new FilterApt(this.state.rent, this.state.leaseTime, this.state.occupants, this.state.beds,
      this.state.baths, this.state.squareFeet, this.state.rooms, this.state.kitchen,
      this.state.floor, this.state.pets, this.state.poBox, this.state.studyRooms,
      this.state.gym, this.state.pool, this.state.ac, this.state.heat)


    this.accountRepository.filterApartments(filter)
      .then(resp => {
        console.log(resp)

        let apts = resp;
        this.setState({ filteredApts: apts })
        // this.setState({ filteredApts })
        console.log(this.state)

        if (!this.state.filteredApts) {
          $("#no-apt-match").removeClass("incorrect-no-display");
        }
        else if (this.state.filteredApts.length === 0) {
          $("#no-apt-match").removeClass("incorrect-no-display");
        }
      })
  }



  render() {
    // if (this.state.items === [] || this.state.items === null) {
    //   return (
    //     <>No Match Found</>
    //   )
    // }

    if (!this.state.filteredApts) {
      return <>No Match Found</>
    }


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
                  <option value={1}>House</option>
                  <option value={2}>Apartment</option>
                  <option value={3}>TownHouse</option>
                  <option value={4}>Condo</option>
                  <option value={5}>Dorm</option>
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
                <select className="custom-select" onChange={this.updateRoomStyle} value={roomStyle}>
                  <option value="">Room Style</option>
                  <option value={1}>Suite</option>
                  <option value={2}>Double</option>
                </select>
              </div>


              <div className="filter">
                <div className="filterTitle">Bedrooms
                 <button onClick={this.updateBedrooms} className="xbutton">clear</button>
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
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="bedroom" id="bedroom4"
                    checked={bedrooms === '4'}
                    value={4} onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom4">
                    4
                </label>
                </div>

              </div>


              <div className="filter">
                <div className="filterTitle"> Bathrooms
                <button onClick={this.updateBathrooms} className="xbutton">clear</button>
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
                <button onClick={this.updateOccupants} className="xbutton">clear</button>
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
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="occupant" id="occupant4"
                    checked={occupants === '4'}
                    value={4} onChange={this.updateOccupants} />
                  <label className="form-check-label" htmlFor="occupant4">
                    4
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle"> Rooms
                <button onClick={this.updateRooms} className="xbutton">clear</button>
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
                <button onClick={this.updateFloors} className="xbutton">clear</button>
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
                <div className="filterTitle">Kitchens
                <button onClick={this.updateKitchens} className="xbutton">clear</button>
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
                    checked={kitchens === '0'}
                    value={0} onChange={this.updateKitchens} />
                  <label className="form-check-label" htmlFor="kitchenNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Laundry Room
                <button onClick={this.updateLaundryRooms} className="xbutton">clear</button>
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
                    checked={laundryRooms === '0'}
                    value={0} onChange={this.updateLaundryRooms} />
                  <label className="form-check-label" htmlFor="laundryRoomNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Pet
                <button onClick={this.updatePets} className="xbutton">clear</button>
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
                <div className="filterTitle">Smoking
                <button onClick={this.updateSmoking} className="xbutton">clear</button>
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
                    checked={smoking === '0'}
                    value={0} onChange={this.updateSmoking} />
                  <label className="form-check-label" htmlFor="smokingNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Pool
                <button onClick={this.updatePool} className="xbutton">clear</button>
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
                    checked={pool === '0'}
                    value={0} onChange={this.updatePool} />
                  <label className="form-check-label" htmlFor="poolNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Gym
                <button onClick={this.updateGym} className="xbutton">clear</button>
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
                    checked={gym === '0'}
                    value={0} onChange={this.updateGym} />
                  <label className="form-check-label" htmlFor="gymNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div className="filterTitle">Study Room
                <button onClick={this.updatestudyRoom} className="xbutton">clear</button>
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
                    checked={studyRoom === '0'}
                    value={0} onChange={this.updateStudyRoom} />
                  <label className="form-check-label" htmlFor="StudyRoomNo">
                    No
                </label>
                </div>
              </div>

              <div className="filter">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">SquareFeet</span>
                  </div>
                  <input type="text" class="form-control" aria-label="SquareFeet" onChange={this.updateSqureFeet} value={this.squareFeet} maxlength="4" />
                </div>
              </div>

              <div className="filter">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Rent</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={this.updateRent} value={this.rent} maxlength="4" />
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

                {
                  this.filteredApts.map((item, index) => (
                    <SearchResult key={index} item={item} />
                  ))
                }
              </div>

              <h5 id="no-apt-match" className="incorrect-no-display">You have no results</h5>
            </div>

          </div>
        </div>
      </>
    );
  }
}

const SearchResult = ({ item }) => {

  return (
    <div className="searchResult">
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
          <div> Number of Occupants:{item.occupants}</div>
          <div> Number of Bedrooms:{item.beds}</div>
          <div> Number of Bathrooms:{item.baths}</div>
          <div> Sqaure Feet:{item.squareFeet}</div>
        </div>
        <button className="resetButton">Contact Owner</button>
      </div>
    </div>
  )
}
export default FindApt;