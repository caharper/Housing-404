import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository'
import Navbar from "../Navbar";


export default class Event extends Component {
    accountRepository = new AccountRepository;
    state = {
        events: [],
    }

    addToMyEvents(){

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

                <div className="card-deck">
                    {events.map((event, index)=> (
                      <>
                      <div className="row" key={index}>

                      </div>








                        <div className="card">
                            <div className="card-body">

                                <div className="card-title">Details:{event.details}</div>
                                <div className="card-text"> Date:{event.date}</div>

                                <button onClick={() => this.addToMyEvents()} className="addToEvent">Add to My Events</button>
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
