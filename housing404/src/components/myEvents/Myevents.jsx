import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository';
import AddEvent from "./AddEvents";



class Myevents extends Component {
  accountRepository = new AccountRepository;

  state = {
    eventsAttend: null,
    myEvents: null

  }
  // addEvent() {
  //   let addEvents = new Event(this.state.details, this.state.date)

  //   this.accountRepository.createUserOwnedEvent(addEvents)
  //     .then(addEvent => {
  //       console.log(addEvent)
  //       this.setState({ addEvent })
  //     })
  // }

  deleteAnEvent(eId){
    this.accountRepository.deleteEvent(eId, localStorage.getItem("sessuid"))
      .then(resp => {
        console.log(resp)
        // redirect login   if(this.state.user !== null){
        window.location.href = '/main';
      })
      .catch(resp => {
        console.log(resp)
      })
  }

    removeFromAttending(eId) {
      this.accountRepository.deleteSingleGoingEvent(eId, localStorage.getItem("sessuid"))
        .then(resp => {
          console.log(resp)
          // redirect login   if(this.state.user !== null){
          window.location.href = '/main';
        })
        .catch(resp => {
          console.log(resp)
        })
    }

    getAttending(eId) {
      // make api call
      this.accountRepository.getAttendingEventWithId(eId)
          .then(attendees => {
            let list = attendees.join()
            return list
          })
    }

  render() {

    // Don't display my events
    // let badMyevents = (this.state.myEvents === undefined || this.state.myEvents === null)
    // Don't display events attend
    // let badEventsattend = (this.state.eventsAttend === undefined || this.state.eventsAttend === null)

    console.log(this.state.eventsAttend)
    console.log('my events: ', this.state.myEvents)

    if (!this.state.myEvents && !this.state.eventsAttend) {
      return (
        <>
          <div><Navbar></Navbar></div>
            <div className="row justify-content-center pb-2">
                <h1>My Events</h1>
            </div>
          <div>
            <AddEvent></AddEvent>
          </div>
          You have no events
        </>
      )
    }
    if (!this.state.eventsAttend) {
      return (
        <>
          <div><Navbar></Navbar></div>
            <div className="row justify-content-center pb-2">
                <h1>My Events</h1>
            </div>
          <div>
            <AddEvent></AddEvent>
          </div>
          You have no attending events, but you have created events
          <h1>Event Attending</h1>
          <div>
            {/* {this.state.myEvents.map(item => (
              <>
                <div>Name:{item.details}</div>
                <div> Date:{item.date}</div>
              </>
            ))} */
              this.state.myEvents.name}
          </div>
        </>
      )
    }
    if (!this.state.myEvents) {
      return (
        <>
          <div><Navbar></Navbar></div>
            <div className="row justify-content-center pb-2">
                <h1>My Events</h1>
            </div>
          <div>
            <AddEvent></AddEvent>
          </div>
          You have no created events, but you have attending events
            <h1>Events Posted</h1>
          <div>
            <AddEvent></AddEvent>
          </div>
          <div>
            {this.state.eventsAttend.map(events => (
              <div>
                <div>Details:{events.name}</div>
                <div> Date:{events.date}</div>
                <button onClick={this.remove}>Remove</button>
              </div>
            ))}
          </div>
        </>
      )
    }
    return (
      <>
        <div><Navbar></Navbar></div>
          <div className="row justify-content-center pb-2">
              <h1>My Events</h1>
          </div>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h1>Event Attending</h1>
              <div>
                {this.state.eventsAttend.map(item => (
                  <div className="searchResult" >
                    <div className="row">
                      <div className="col col-mg-8 items">
                        <div className="row">Name:{item.details}</div>
                        <div className="row"> Date:{item.date}</div>
                        <div className="row">
                          <button onClick={() => this.removeFromAttending(item.e_id)} className="attendButton">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div class="col-6" >
              <h1>Events Posted</h1>
              <div>
                <AddEvent></AddEvent>
              </div>
              {this.state.myEvents.map(events => (
                <div className="row justify-content-center pt-2">
                  <div className="searchResult border w-75">
                    <div className="container">
                      <div className="row">Owner: {events.name}</div>
                      <div className="row">Details: {events.details}</div>
                      <div className="row">Date: {events.date}</div>
                      <div className="row">Attending: {this.getAttending(events.e_id)}</div>
                      <div className="row justify-content-center pt-3">
                        <button onClick={() => this.deleteAnEvent(events.e_id)} className="attendButton">Remove</button>
                      </div>
                    </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.accountRepository.getUserGoingEvents(localStorage.getItem("sessuid"))
      .then(eventListResp => {
        let eventsAttend = eventListResp;
        console.log('Attend events: ', eventsAttend)
        this.setState({ eventsAttend: eventsAttend })
      })
    this.accountRepository.getUserOwnedEvents(localStorage.getItem("sessuid"))
      .then(myEventsResp => {
        let myEvents = myEventsResp;
        console.log('My events: ', myEvents)
        this.setState({ myEvents: myEvents })
        console.log(this.state.eventsAttend)
        console.log(this.state.myEvents)
      })
  }
}
export default Myevents;

// <button onClick={() => this.removeFromAttending(item.e_id)} className="attendButton">Delete</button>
//
//
//
//
//   removeFromAttending(eId) {
//     this.accountRepository.deleteSingleGoingEvent(eId, localStorage.getItem("sessuid"))
//       .then(resp => {
//         console.log(resp)
//         // redirect login   if(this.state.user !== null){
//         window.location.href = '/main';
//       })
//       .catch(resp => {
//         console.log(resp)
//       })
//   }
//
//   getAttending(eId) {
//     // make api call
//     this.accountRepository.getAttendingEventWithId(eId)
//         .then(attendees => {
//           let list = attendees.join()
//           return list
//         })
//   }
//
//   <div>Attending: {this.getAttending(events.e_id)}</div>
