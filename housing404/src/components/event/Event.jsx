import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository'
import Navbar from "../Navbar";
import './event.css'


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
                <div className="container pt-0">
                  <h1>Events</h1>

                <div className="row justify-content-center justify-content-between" id="cardRow">
                      {events.map((event, index)=> (
                        <>
                          <div className="eventCard mt-3" key={index}>
                              <div className="card-body">

                                  <div className="card-title">Details:{event.details}</div>
                                  <div className="card-text"> Date:{event.date}</div>

                                  <button onClick={() => this.addToMyEvents(event.e_id)} className="resetButton">Attend</button>
                              </div>
                          </div>
                        </>
                      ))}
                    </div>
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
