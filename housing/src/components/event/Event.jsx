import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository'
import Navbar from "../Navbar";


export default class Event extends Component {
    accountRepository = new AccountRepository;
    state = {
        events: [],
    }
    myEvents = () => {
        // request server api call
    }

    render() {
       
        if(this.state.userList === null){
            return(<></>)
          } 

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

    componentDidMount(){
        this.accountRepository.getAllEvents()
          .then(events => {
            this.setState({ events })
          })
      }

}

