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

    // Reset on new search
    $("#no-apt-match").addClass("incorrect-no-display");
    $("#no-selected-a-filter").addClass("incorrect-no-display");
    $("#no-filter-select-a-heading").addClass("incorrect-no-display");


    // request server api call
    let filter = new FilterApt(this.state.rent, this.state.leaseTime, this.state.occupants, this.state.beds,
                               this.state.baths, this.state.squareFeet, this.state.rooms, this.state.kitchen,
                               this.state.floor, this.state.pets, this.state.poBox, this.state.studyRooms,
                               this.state.gym, this.state.pool, this.state.ac, this.state.heat)

    if(this.state.rent === null && this.state.leaseTime === null && this.state.occupants === null &&
       this.state.beds === null && this.state.baths === null && this.state.squareFeet === null &&
       this.state.rooms === null && this.state.kitchen === null && this.state.floor === null &&
       this.state.pets === null && this.state.poBox === null && this.state.studyRooms === null &&
       this.state.gym === null && this.state.pool === null && this.state.ac === null && this.state.heat === null){
         $("#no-selected-a-filter").removeClass("incorrect-no-display");
         $("#no-filter-select-a-heading").removeClass("incorrect-no-display");
         return
       }


    this.accountRepository.filterApartments(filter)
      .then(resp => {
        console.log(resp)

        let apts = resp;
        this.setState({filteredApts: apts})
        // this.setState({ filteredApts })
        console.log(this.state)

        if(!this.state.filteredApts){
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
    const {items, type, beds, year, squareFeet, baths, occupants, rooms, floor, kitchen, laundryRooms, studyRooms, pets, smoking, gym, pool, roomStyle, rent } = this.state;


    return (
      <>
        <div><Navbar></Navbar></div>

        <div className="container">
          <div className="row justify-content-center pb-2">
            <h1>Find Housing</h1>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <h1>Filter</h1>

                <div className="row justify-content-center py-0 my-0">
                  <p className="incorrect incorrect-no-display" id="no-selected-a-filter">Please select a filter</p>
                </div>

              <div className="filter">
                <div className="filterTitle">Bedrooms
                 <button onClick={this.updateBedrooms} className="xbutton">x</button>
                </div>
                <div className="form-check form-check-inline" >
                  <input className="form-check-input" type="radio" name="beds" id="bedroom1" checked={beds === "1"}
                    value={1}
                    onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom1">
                    1
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="beds" id="bedroom2"
                    checked={beds === '2'}
                    value={2} onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom2">
                    2
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="beds" id="bedroom3"
                    checked={beds === '3'}
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
                  <input className="form-check-input" type="radio" name="baths" id="bathroom1" checked={baths === "1"}
                    value={1}
                    onChange={this.updateBathrooms} />
                  <label className="form-check-label" htmlFor="bathroom1">
                    1
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="baths" id="bathroom2"
                    checked={baths === "2"}
                    value={2} onChange={this.updateBathrooms} />
                  <label className="form-check-label" htmlFor="bathroom2">
                    2
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="baths" id="bathroom3"
                    checked={baths === "3"}
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
                    checked={floor === '1'}
                    value={1} onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor1">
                    1
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="floor" id="floor2"
                    checked={floor === '2'}
                    value={2} onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor2">
                    2
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="floor" id="floor3"
                    checked={floor === '3'}
                    value={3} onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor3">
                    3
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
                    checked={pets === '0'}
                    value={0} onChange={this.updatePets} />
                  <label className="form-check-label" htmlFor="petNo">
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
                    checked={pool === '0'}
                    value={0} onChange={this.updatePool} />
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
                    checked={gym === '0'}
                    value={0} onChange={this.updateGym} />
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
                    checked={studyRooms === '1'}
                    value={1} onChange={this.updateStudyRoom} />
                  <label className="form-check-label" htmlFor="studyRoomYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="studyRoom" id="studyRoomNo"
                    checked={studyRooms === '0'}
                    value={0} onChange={this.updateStudyRoom} />
                  <label className="form-check-label" htmlFor="StudyRoomNo">
                    No
                </label>
                </div>
              </div>

              <button onClick={() => this.filter()} className="filterButton">Filter</button>
            </div>

            <div className="col col-lg-8">
              <h1 >Search Results</h1>
              <div className="searchResultback">
                <div>
                  {
                  // this.filteredApts.map((item, index) => (
                  //   <div className="searchResult" key={index}>
                  //     <div className="row">
                  //
                  //       <div class="col col-mg-3 img">
                  //         <div className="imageSearched">
                  //           <img src={item.img} />
                  //         </div>
                  //       </div>
                  //
                  //       <div className="col col-mg-8 items">
                  //         <div>Name:{item.type}</div>
                  //         <div> Type:{item.type}</div>
                  //         <div> Description:{item.description}</div>
                  //         <div> Location:{item.location}</div>
                  //         <div> Rent:{item.rent}</div>
                  //         <div> Avalibility:{item.leaseTime}</div>
                  //         <div> Number of Occupants:{item.occupants}</div>
                  //         <div> Number of Bedrooms:{item.beds}</div>
                  //         <div> Number of Bathrooms:{item.baths}</div>
                  //         <div> Sqaure Feet:{item.squareFeet}</div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // ))
                  this.state.filteredApts.map((item, index) => (
                    <SearchResult key={index} item={item} />
                  ))
                }
                </div>
              </div>
              <h5 id="no-apt-match" className="incorrect-no-display">You have no results</h5>
              <h5 id="no-filter-select-a-heading" className="incorrect-no-display text-danger">Please select a filter</h5>
            </div>

          </div>
        </div>
      </>

    );
  }

  componentDidMount() {

    this.accountRepository.getAllApartments()
      .then(allApts => {
        console.log(allApts)
        this.setState({filteredApts: allApts })
      })
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
