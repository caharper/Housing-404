import React, { Component } from 'react';
import Navbar from "../Navbar";


class Myevents extends Component {
  state = {
    events: [
      {
        Details: 'Party',
        Date: "May 21", img: "https://via.placeholder.com/150"
      }
    ],
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
  remove = () => {
    // request server api call

  }
  render() {

    const { events, myEvents } = this.state;

    return (
      <>
        <div><Navbar></Navbar></div>

        <div class="container">
          <div class="row">

            <div class="col-6">
              <h1>Event Attending</h1>
              {events.map(events => (
                <div>
                  <div>Details:{events.name}</div>
                  <div> Date:{events.type}</div>
                  <div className="image searched">
                    <img src={events.img} />
                  </div>
                  <button onClick={this.remove}>Remove</button>
                </div>
              ))}

            </div>

            <div class="col-6" >
              <h1>Events Posted</h1>
              {myEvents.map(events => (
                <div>
                  <div>Details:{events.name}</div>
                  <div> Date:{events.type}</div>
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
}
export default Myevents;
