import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository';



class Myevents extends Component {
  accountRepository = new AccountRepository;

  state = {
    eventsAttend: null,
    myEvents: [
      {
        type: 'Apartment',
        name: "Haya", gender: "student", img: "https://via.placeholder.com/150"
      },
      {
        gender: 'female', type: 'house',
        name: "Bob", img: "https://via.placeholder.com/150"
      }
    ],
  }

  render() {

    if(this.state.eventsAttend === null || this.state.eventsAttend === undefined){
      return(
        <>
          <div><Navbar></Navbar></div>
          You have no events
        </>
      )
    } 

    const { eventsAttend, myEvents } = this.state;

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
              {myEvents.map(events => (
                <div>
                  <div>Details:{events.name}</div>
                  <div> Date:{events.date}</div>
                  <div className="image searched">
                    <img src={events.img} />
                  </div>
                  <button onClick={this.remove}>Remove</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount(){
    this.accountRepository.getUserGoingEvents(localStorage.getItem("sessuid"))
      .then(eventListResp => {
        let eventsAttend = eventListResp[0];
        this.setState({eventsAttend: eventsAttend})
      })

      this.accountRepository.getUserOwnedEvents(localStorage.getItem("sessuid"))
      .then(myEventsResp => {
        let myEvents = myEventsResp[0];
        this.setState({myEvents: myEvents })
        console.log(this.state.eventsAttend)
        console.log(this.state.myEvents)
      })
  }
}
export default Myevents;
