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

  render() {

    // Don't display my events
    let badMyevents = (this.state.myEvents === undefined || this.state.myEvents === null)
    // Don't display events attend
    let badEventsattend = (this.state.eventsAttend === undefined || this.state.eventsAttend === null)

    console.log(this.state.eventsAttend)
    console.log('my events: ',this.state.myEvents)

    if (badMyevents && badEventsattend) {
      return (
        <>
          <div><Navbar></Navbar></div>
          <div>
            <AddEvent></AddEvent>
          </div>
          You have no events
        </>
      )
    }

    if (badEventsattend) {
      return (
        <>
          <div><Navbar></Navbar></div>
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

    if (badMyevents) {
      return (
        <>
          <div><Navbar></Navbar></div>
          <div>
            <AddEvent></AddEvent>
          </div>
          You have no created events, but you have attending events

            <h1>Events Posted</h1>
          <div>
            <AddEvent></AddEvent>
          </div>
          <div>
            {this.state.myEvents.map(events => (
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

        <div class="container">
          <div class="row">

            <div class="col-6">
              <h1>Event Attending</h1>

              <div>
                {this.state.eventsAttend.map(item => (
                  <div className="searchResult" >
                    <div className="row">
                      <div className="col col-mg-8 items">
                        <div>Name:{item.details}</div>
                        <div> Date:{item.date}</div>
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
                <div>
                  <div>Details:{events.name}</div>
                  <div> Date:{events.date}</div>
                  <button onClick={this.remove}>Remove</button>
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
        let eventsAttend = eventListResp[0];
        this.setState({ eventsAttend: eventsAttend })
      })

    this.accountRepository.getUserOwnedEvents(localStorage.getItem("sessuid"))
      .then(myEventsResp => {
        let myEvents = myEventsResp[0];
        console.log('My events: ', myEvents)
        this.setState({ myEvents: myEvents })
        console.log(this.state.eventsAttend)
        console.log(this.state.myEvents)
      })
  }
}
export default Myevents;
