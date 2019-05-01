import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository'
import Navbar from "../Navbar";
import './event.css'


export default class Event extends Component {
    accountRepository = new AccountRepository;
    state = {
        events: [],
    }
    myEvents = () => {
        // request server api call
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

                    <div className="row justify content-center justify-content-between" id="cardRow">
                        {events.map(events => (
                            <div className="eventCard">
                                <div className="card-body">
                                    <div class="card-title">Details:{events.details}</div>
                                    <div class="card-text"> Date:{events.date}</div>
                                    <div className="card-footer">
                                        <button onClick={this.myEvents} className="resetButton">Attend</button>
                                    </div>
                                </div>
                            </div>
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


