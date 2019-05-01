import React, { Component } from 'react'
import { AccountRepository } from './../../api/accountRepository';
import { FilterRoommate } from './../../models/filterRoomate';

import Navbar from "../Navbar";
import $ from 'jquery';
import { SearchResults } from './searchResult'
import { NewNotification } from './../../models/newNotif';



class FindRoomate extends Component {
  accountRepository = new AccountRepository;

  state = {
    items: [],

    gender: null,
    smoker: null,
    year: null,
    pets: null,
    tempP: null,
    genderP: null,
    smokerP: null,
    tidynessP: null,
    yearP: null,
    bedTimeP: null,
    wakeTime: null,
    wakeTimeP: null,

    notification: null

  }

  contactUser(toId, notif){

    // first need to get the user with that id that sent the notification
    // add that in the paramaters passed from below

    console.log(toId)
    console.log(notif)

    let notification = new NewNotification(notif);

    this.accountRepository.sendNotification(localStorage.getItem("sessuid"), toId, notif)
      .then(notificationResp => {
        console.log(notificationResp)
      })


  }


  updateSmoker = (e) => {
    this.setState({ smoker: e.target.value || null })
  }

  updateGender = (e) => {
    this.setState({ gender: e.target.value || null })
  }
  updateYear = (e) => {
    this.setState({ year: e.target.value || null })
  }
  updatePets = (e) => {
    this.setState({ pets: e.target.value || null })
  }
  updateTidyness = (e) => {
    this.setState({ tidynessP: e.target.value || null })
  }

  filter() {
    // Reset on new search
    $("#no-roommate-match").addClass("incorrect-no-display");
    $("#no-selected-r-filter").addClass("incorrect-no-display");
    $("#no-filter-select-heading").addClass("incorrect-no-display");

    // request server api call
    let filter = new FilterRoommate(this.state.gender, this.state.smoker, this.state.year,
                                    this.state.pets, this.state.tempP, this.state.genderP,
                                    this.state.smokerP, this.state.tidynessP, this.state.yearP,
                                    this.state.bedTimeP, this.state.wakeTime, this.state.wakeTimeP)

    console.log(filter);
    console.log(this.state.gender)

    // Need to make it where error pops up if no filters selected
    if(this.state.gender === null && this.state.smoker === null && this.state.year === null &&
       this.state.pets === null && this.state.tempP == null && this.state.genderP === null &&
       this.state.smokerP === null && this.state.tidynessP === null && this.state.yearP === null &&
       this.state.bedTimeP === null && this.state.wakeTime === null && this.state.wakeTimeP === null){
         $("#no-selected-r-filter").removeClass("incorrect-no-display");
         $("#no-filter-select-heading").removeClass("incorrect-no-display");
         return
      }

    this.accountRepository.filterUsers(filter)
      .then(resp => {
        console.log("response: ",resp)
        let roommates = resp;
        this.setState({items: roommates})
        console.log('items in state: ',this.state.items)
        if(!this.state.items){
          $("#no-roommate-match").removeClass("incorrect-no-display");
        }
        else if (this.state.items.length === 0) {
          $("#no-roommate-match").removeClass("incorrect-no-display");
        }

        // ****************** needs another component to pass values to props
      })

  }


  pMatch() {
    this.accountRepository.getPerfectMatch(localStorage.getItem("sessuid"))
      .then(matchResp => {
        let matches = matchResp;
        console.log(matches)
        this.setState({ items: matches })
      })
  }


  render() {

    // if (this.state.items === [] || this.state.items === null) {
    //   return (
    //     <h5 className="pt-4">No Match Found</h5>
    //   )
    // }
    const { items, gender, year, tidyness, smoker, genderP, smokerP, yearP, pets, tidynessP } = this.state;

    return (
      <>
        <div><Navbar></Navbar></div>
        <div className="container">
          <div className="row">

            <div className="col-sm-3">
              <h1>Filter</h1>
              <div className="row justify-content-center py-0 my-0">
                <p className="incorrect incorrect-no-display" id="no-selected-r-filter">Please select a filter</p>
              </div>

              <div className="filter">
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



              <div className="filter">
                <div className="filterTitle">Smoker
                <button onClick={this.updateSmoker} className="xbutton"></button>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="smoker" id="smokerYes"
                    checked={smoker === '1'}
                    value={1} onChange={this.updateSmoker} />
                  <label className="form-check-label" htmlFor="smokerYes">
                    Yes
                </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="smoker" id="smokerNo"
                    checked={smoker === '0'}
                    value={0} onChange={this.updateSmoker} />
                  <label className="form-check-label" htmlFor="smokerNo">
                    No
                </label>
                </div>
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
                <select className="custom-select" onChange={this.updateTidyness} value={tidynessP}>
                  <option value="">Tidyness</option>
                  <option value={1}>Not Tiddy</option>
                  <option value={2}>Tidy</option>
                  <option value={3}>Very Tiddy</option>
                </select>
              </div>

              <button onClick={() => this.filter()} className="filterButton">Filter</button>
              <button onClick={() => this.pMatch()} className="perfectButton">Perfect Match</button>


            </div>

            <div className="col col-lg-8">
              <h1 >Search Results</h1>
                {
                  items.map((item, index) => (
                    // <SearchResult contactUser={x => this.contactUser(x)} key={index} item={item} />
                    <SearchResults contactUser={x => this.contactUser(x)} key={index} item={item} notif={this.state.notifcation}></SearchResults>

                  ))
                }

              <h5 id="no-roommate-match" className="incorrect-no-display">You have no results</h5>
              <h5 id="no-filter-select-heading" className="incorrect-no-display text-danger">Please select a filter</h5>
            </div>



          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.accountRepository.getUsers()
      .then(items => {
        console.log(items)
        this.setState({ items })
      })
  }
}

// const SearchResult = ({ item }) => {
//   return (
//     <div className="container pt-0">
//       <div className="row justify content-center justify-content-between">
//         <div className="searchCard">
//           <div className="card-body">
//             <div> Gender: {item.gender}</div>
//             <div> Smoker: {item.smoker.data[0] === 1 ? "Yes" : "No"}</div>
//             <div> Tidyness: {item.tidyness}</div>
//             <div> Year: {item.year}</div>
//             <div> Pets: {item.pets}</div>
//           </div>
//           <button className="resetButton" onClick={(e) => this.props.contactUser(item.id)}>Contact</button>
//         </div>
//       </div>
//     </div>
//   )
// }


// const SearchResult = ({ item }) => {
//   return (
//     <div className="searchResult">
//       <div className="row">
//         <div className="col col-mg-3 img">
//           <div className="imageSearched">
//             <img src={item.img} />
//           </div>
//         </div>
//         <div className="col col-mg-8 items">
//           <div>Name: {item.name}</div>
//           <div> Gender: {item.gender}</div>
//           <div> Smoker: {item.smoker}</div>
//           <div> Tidyness: {item.tidyness}</div>
//           <div> Smoker: {item.smoker}</div>
//           <div> Year: {item.yearP}</div>
//           <div> Pets: {item.pets}</div>
//         </div>
//         <button className="resetButton">Contact</button>
//       </div>
//     </div>
//     )
// }

export default FindRoomate;
