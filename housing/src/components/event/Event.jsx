import React, { Component } from 'react';
import Navbar from "../Navbar";


export default class Event extends Component {
    state = {
        events: [
            {
                Details: 'Party',
                Date: "May 21", img: "https://via.placeholder.com/150"
            }

        ],
    }
    myEvents = () => {
        // request server api call
    }

    render() {
        const { events } = this.state;
        return (
            <>

                <div>
                    <Navbar></Navbar>
                </div>

                <div>
                    {events.map(events => (
                        <div>
                            <div>Details:{events.details}</div>
                            <div> Date:{events.date}</div>
                            <div className="image searched">
                                <img src={events.img} />
                            </div>
                            <button onClick={this.myEvents}>Add to My Events</button>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

