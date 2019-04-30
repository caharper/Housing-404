import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository'
import Navbar from "../Navbar";


export default class Event extends Component {
    accountRepository = new AccountRepository;
    state = {
        events: [],
    }

    addToMyEvents(eId){
      this.accountRepository.addToAttending(localStorage.getItem("sessuid"), eId)
          .then(newEvents => {
          console.log(newEvents)
        })
    }

    render() {

        if (this.state.userList === null) {
            return (<></>)
        }

        const { events } = this.state;
        return (
            <>

                <div>
                    <Navbar></Navbar>
                </div>

                <div className="row justify-content-between">
                      {events.map((event, index)=> (
                        <>
                          <div className="card col-4" key={index}>
                              <div className="card-body">

                                  <div className="card-title">Details:{event.details}</div>
                                  <div className="card-text"> Date:{event.date}</div>

                                  <button onClick={() => this.addToMyEvents(event.e_id)} className="addToEvent">Add to My Events</button>
                              </div>
                          </div>
                        </>
                      ))}
                </div>
            </>
        );
    }

    componentDidMount() {
      this.accountRepository.getAllEvents()
          .then(events => {
            console.log(events)
            this.setState({ events })
          })
    }

}
