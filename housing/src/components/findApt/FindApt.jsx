import React, { Component } from 'react'
import Navbar from "../Navbar";
import './findApt.css'



class FindApt extends Component {
  state = {
    items: [
      {
        name: "Lofts", type: "House", description: "Nice place in dallas", img: "https://via.placeholder.com/150"
      },
      {
        name: "Landmark", type: "Apartment", img: "https://via.placeholder.com/150"
      },
      {
        name: "5MockingBird", type: "Townhouse", img: "https://via.placeholder.com/150"
      }
    ],
    type: '',
    year: '',
    squareFeet: '',
    bedrooms: '',
    bathrooms: '',
    occupants: '',
    rooms: '',
    floors: '',
    rent: '',
    kitchens: '',
    laundryRooms: '',
    studyRoom: '',
    pets: '',
    smoking: '',
    gym: '',
    pool: '',
    heat: '',
    airCondition: '',
    roomStyle: ''

  }

  updateType = (e) => {
    this.setState({ type: e.target.value || '' })
  }

  updateSquareFeet = (e) => {
    this.setState({ squareFeet: e.target.value || '' })
  }

  updateYear = (e) => {
    this.setState({ year: e.target.value || '' })
  }

  updateBedrooms = (e) => {
    this.setState({ bedrooms: e.target.value || '' })
  }
  updateBathrooms = (e) => {
    this.setState({ bathrooms: e.target.value || '' })
  }
  updateOccupants = (e) => {
    this.setState({ occupants: e.target.value || '' })
  }
  updateRooms = (e) => {
    this.setState({ rooms: e.target.value || '' })
  }
  updateFloors = (e) => {
    this.setState({ floors: e.target.value || '' })
  }
  updatekitchens = (e) => {
    this.setState({ kitchens: e.target.value || '' })
  }
  updateLaundryRooms = (e) => {
    this.setState({ laundryRooms: e.target.value || '' })
  }
  updateStudyRoom = (e) => {
    this.setState({ studyRoom: e.target.value || '' })
  }
  updatePets = (e) => {
    this.setState({ pets: e.target.value || '' })
  }
  updateGym = (e) => {
    this.setState({ gym: e.target.value || '' })
  }
  updateHeat = (e) => {
    this.setState({ heat: e.target.value || '' })
  }
  updateAirCondition = (e) => {
    this.setState({ airCondition: e.target.value || '' })
  }
  uppdateSmoking = (e) => {
    this.setState({ type: e.target.value || '' })
  }
  updatePool = (e) => {
    this.setState({ pool: e.target.value || '' })
  }
  updateRoomStyle = (e) => {
    this.setState({ roomStyle: e.target.value || '' })
  }


  filter = () => {
    // request server api call

  }

  archive = () => {
    // request server api call

  }

  render() {
    const { items, type, bedrooms, year, squareFeet, bathrooms, occupants, rooms, floors, kitchens, laundryRooms, studyRoom, pets, smoking, gym, pool, heat, airCondition, roomStyle, rent } = this.state;


    return (
      <>
        <div><Navbar></Navbar></div>

        <div className="container">
          <div className="row">
            <div className="col-sm-3">

              <select className="custom-select" onChange={this.updateType} value={type}>
                <option value="">Type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="TownHouse">TownHouse</option>
                <option value="Condo">Condo</option>
                <option value="Dorm">Dorm</option>
              </select>

              <select className="custom-select" onChange={this.updateYear} value={year}>
                <option value="">Year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophmore">Sophmore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Dorm">Dorm</option>
              </select>

              <select className="custom-select" onChange={this.updateSqureFeet} value={squareFeet}>
                <option value="">Square Feet</option>
                <option value="500">500</option>
                <option value="750">750</option>
                <option value="1000">1000</option>
                <option value="1250">1250</option>
                <option value="1500">1500</option>
                <option value="1750">1750</option>
                <option value="2000">2000</option>
                <option value="2250">2250</option>
                <option value="2750">2750</option>
                <option value="3000">3000</option>
              </select>

              <div>
                Bedrooms
              <div className="form-check" >
                  <input className="form-check-input" type="radio" name="bedroom" id="bedroom1" checked={bedrooms === "1"}
                    value='1'
                    onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom1">
                    1
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="bedroom" id="bedroom2"
                    checked={bedrooms === "2"}
                    value="2" onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom2">
                    2
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="bedroom" id="bedroom3"
                    checked={bedrooms === "3"}
                    value="3" onChange={this.updateBedrooms} />
                  <label className="form-check-label" htmlFor="bedroom3">
                    3
                </label>
                </div>
                <button onClick={this.updateBedrooms}>x</button>
              </div>


              <div>
                Bathrooms
              <div className="form-check" >
                  <input className="form-check-input" type="radio" name="bathroom" id="bathroom" checked={bathrooms === "1"}
                    value='1'
                    onChange={this.updateBathrooms} />
                  <label className="form-check-label" htmlFor="bathroom1">
                    1
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="bathroom" id="bathroom2"
                    checked={bathrooms === "2"}
                    value="2" onChange={this.updateBathrooms} />
                  <label className="form-check-label" htmlFor="bathroom2">
                    2
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="bathroom" id="bathroom3"
                    checked={bathrooms === "3"}
                    value="3" onChange={this.updateBathrooms} />
                  <label className="form-check-label" htmlFor="bathroom3">
                    3
                </label>
                </div>
                <button onClick={this.updateBathrooms}>x</button>
              </div>

              <div>
                Number of occupants
              <div className="form-check" >
                  <input className="form-check-input" type="radio" name="occupant" id="occupant" checked={occupants === "1"}
                    value='1'
                    onChange={this.updateoccupants} />
                  <label className="form-check-label" htmlFor="occupant1">
                    1
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="occupant" id="occupant2"
                    checked={occupants === "2"}
                    value="2" onChange={this.updateoccupants} />
                  <label className="form-check-label" htmlFor="occupant2">
                    2
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="occupant" id="occupant3"
                    checked={occupants === "3"}
                    value="3" onChange={this.updateoccupants} />
                  <label className="form-check-label" htmlFor="occupant3">
                    3
                </label>
                </div>
                <button onClick={this.updateoccupants}>x</button>
              </div>


              <div>
                Occupants
              <div className="form-check" >
                  <input className="form-check-input" type="radio" name="occupant" id="occupant" checked={occupants === "1"}
                    value='1'
                    onChange={this.updateOccupants} />
                  <label className="form-check-label" htmlFor="occupant1">
                    1
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="occupant" id="occupant2"
                    checked={occupants === "2"}
                    value="2" onChange={this.updateOccupants} />
                  <label className="form-check-label" htmlFor="occupant2">
                    2
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="occupant" id="occupant3"
                    checked={occupants === "3"}
                    value="3" onChange={this.updateOccupants} />
                  <label className="form-check-label" htmlFor="occupant3">
                    3
                </label>
                </div>
                <button onClick={this.updateOccupants}>x</button>
              </div>

              <div>Rooms
              <div className="form-check" >
                  <input className="form-check-input" type="radio" name="room" id="room" checked={rooms === "1"}
                    value='1'
                    onChange={this.updateRooms} />
                  <label className="form-check-label" htmlFor="room1">
                    1
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="room" id="room2"
                    checked={rooms === "2"}
                    value="2" onChange={this.updateRooms} />
                  <label className="form-check-label" htmlFor="room2">
                    2
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="room" id="room3"
                    checked={rooms === "3"}
                    value="3" onChange={this.updateRooms} />
                  <label className="form-check-label" htmlFor="room3">
                    3
                </label>
                </div>
                <button onClick={this.updateRooms}>x</button>
              </div>

              <div>
                Number of Floors
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="floor" id="floor1"
                    checked={floors === "1"}
                    value="1" onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor1">
                    1
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="floor" id="floor2"
                    checked={floors === "2"}
                    value="2" onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor2">
                    2
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="floor" id="floor3"
                    checked={floors === "3"}
                    value="3" onChange={this.updateFloors} />
                  <label className="form-check-label" htmlFor="floor3">
                    3
                </label>
                </div>
                <button onClick={this.updateFloors}>x</button>
              </div>


              <select className="custom-select" onChange={this.updateRoomStyle} value={roomStyle}>
                <option value="">Room Style</option>
                <option value="Freshman">Suite</option>
                <option value="Sophmore">Double</option>
              </select>

              <div>
                Kitchens
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="kitchen" id="kitchenYes"
                    checked={kitchens === "Yes"}
                    value="Yes" onChange={this.updateKitchens} />
                  <label className="form-check-label" htmlFor="kitchenYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="kitchen" id="kitchenNo"
                    checked={kitchens === "No"}
                    value="No" onChange={this.updateKitchens} />
                  <label className="form-check-label" htmlFor="kitchenNo">
                    No
                </label>
                </div>
                <button onClick={this.updateKitchens}>x</button>
              </div>

              <div>
                Laundry Room
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="laundryRoom" id="laundryRoomYes"
                    checked={laundryRooms === "Yes"}
                    value="Yes" onChange={this.updateLaundryRooms} />
                  <label className="form-check-label" htmlFor="laundryRoomYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="laundryRoom" id="laundryRoomNo"
                    checked={laundryRooms === "No"}
                    value="No" onChange={this.updateLaundryRooms} />
                  <label className="form-check-label" htmlFor="laundryRoomNo">
                    No
                </label>
                </div>
                <button onClick={this.updateLaundryRooms}>x</button>
              </div>

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
                Smoking
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="smoking" id="smokingYes"
                    checked={smoking === "Yes"}
                    value="Yes" onChange={this.updateSmoking} />
                  <label className="form-check-label" htmlFor="smokingYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="smoking" id="smokingNo"
                    checked={smoking === "No"}
                    value="No" onChange={this.updateSmoking} />
                  <label className="form-check-label" htmlFor="smokingNo">
                    No
                </label>
                </div>
                <button onClick={this.updateSmoking}>x</button>
              </div>

              <div>
                Pool
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="pool" id="poolYes"
                    checked={pool === "Yes"}
                    value="Yes" onChange={this.updatePool} />
                  <label className="form-check-label" htmlFor="poolYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="pool" id="poolNo"
                    checked={pool === "No"}
                    value="No" onChange={this.updatePool} />
                  <label className="form-check-label" htmlFor="poolNo">
                    No
                </label>
                </div>
                <button onClick={this.updatePool}>x</button>
              </div>

              <div>
                Gym
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gym" id="gymYes"
                    checked={gym === "Yes"}
                    value="Yes" onChange={this.updateGym} />
                  <label className="form-check-label" htmlFor="gymYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gym" id="gymNo"
                    checked={gym === "No"}
                    value="No" onChange={this.updateGym} />
                  <label className="form-check-label" htmlFor="gymNo">
                    No
                </label>
                </div>
                <button onClick={this.updateGym}>x</button>
              </div>

              <div>
                Study Room
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="studyRoom" id="studyRoomYes"
                    checked={studyRoom === "Yes"}
                    value="Yes" onChange={this.updateStudyRoom} />
                  <label className="form-check-label" htmlFor="studyRoomYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="studyRoom" id="studyRoomNo"
                    checked={studyRoom === "No"}
                    value="No" onChange={this.updateStudyRoom} />
                  <label className="form-check-label" htmlFor="StudyRoomNo">
                    No
                </label>
                </div>
                <button onClick={this.updatestudyRoom}>x</button>
              </div>

              <div>
                Heat
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="heat" id="heatYes"
                    checked={heat === "Yes"}
                    value="Yes" onChange={this.updateHeat} />
                  <label className="form-check-label" htmlFor="heatYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="heat" id="heatNo"
                    checked={heat === "No"}
                    value="No" onChange={this.updateHeat} />
                  <label className="form-check-label" htmlFor="heatNo">
                    No
                </label>
                </div>
                <button onClick={this.updateHeat}>x</button>
              </div>

              <div>
                Air Condition
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="airCondition" id="airConditionYes"
                    checked={airCondition === "Yes"}
                    value="Yes" onChange={this.updateAirCondition} />
                  <label className="form-check-label" htmlFor="airConditionYes">
                    Yes
                </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="airCondition" id="airConditionNo"
                    checked={airCondition === "No"}
                    value="No" onChange={this.updateAirCondition} />
                  <label className="form-check-label" htmlFor="airConditionNo">
                    No
                </label>
                </div>
                <button onClick={this.updateAirCondition}>x</button>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Rent</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              <button onClick={this.filter}>Filter</button>

            </div>


            <div className="col col-lg-8">
              <div>
                {items.map(item => (
                  <div className="searchResult" >
                    <div>Name:{item.name}</div>
                    <div> Type:{item.type}</div>
                    <div> Description:{item.description}</div>
                    <div> Location:{item.location}</div>
                    <div> Rent:{item.rent}</div>
                    <div> Avalibility:{item.leaseTime}</div>
                    <div> Number of occupants:{item.occupants}</div>
                    <div> Number of Bedrooms:{item.beds}</div>
                    <div> Number of Bathrooms:{item.baths}</div>
                    <div> Sqaure Feet:{item.squareFeet}</div>


                    <div className="imageSearched">
                      <img src={item.img} />
                    </div>

                    <div className ="addToArchive">
                      <button onClick={this.archive}>Add to Archive</button>
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

export default FindApt;
