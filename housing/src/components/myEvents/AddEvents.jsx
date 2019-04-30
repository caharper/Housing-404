import React, { Component } from 'react';
import { Event } from './../../models/event'
import { AccountRepository } from './../../api/accountRepository';
import './myEvent.css'



export default class AddEvent extends Component {
    accountRepository = new AccountRepository;

    state = {
        addEvents: null,
        details: null,
        date: null
    }

    updateDetails = (e) => {
        this.setState({ details: e.target.value || null })
      }
      updateDate = (e) => {
        this.setState({ date: e.target.value || null })
      }

    addEvent() {
        let newEvent = new Event( this.state.details, this.state.date)
        console.log(newEvent)
        this.accountRepository.createUserOwnedEvent(localStorage.getItem("sessuid"))
            .then(newEvents => {
            console.log(newEvents)
            this.setState({newEvents})
      })
  }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="card" id="addEvents">
                            <form className= "justify-content-center">
                                <div className="form-group">
                                    <h2>Add Events</h2>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Event Details</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.updateDetails} value={this.details}></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="eventDate">Event Date</label>
                                    <input type="text" className="form-control" id="eventDate" aria-describedby="date" placeholder="Event Date" onChange={this.updateDate} value={this.date}/>
                                </div>
                            </form>
                            <button  class="resetButton" onClick={() => this.addEvent()}>Create event</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}