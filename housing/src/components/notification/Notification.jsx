import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository';
import './notification.css';
import AddNotification from "./AddNotification";


class Notification extends Component {
  accountRepository = new AccountRepository;

  state = {
    notification: []
  }

  render() {
    // console.log(typeof(this.state.notifcation))
    if (!this.state.notification) {
      return (
        <>
          <div><Navbar></Navbar></div>
          <h4 className="pt-5">You have no notifications</h4>
        </>
      )
    }
    return (
      <>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="container">
          <h1>Notification</h1>
          <div className="eventCard">
            <AddNotification></AddNotification>

          </div>
          <div>
            {this.state.notification.map((notif, index) => (
              <div className="eventCard">
                <div key={index}>
                  <div>From:{notif.name}</div>
                  <div>Email:{notif.email}</div>
                  <div>Notifcation:{notif.notification}</div>
                  <button onClick={this.myEvents} className="attendButton">Reply</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.accountRepository.getUserNotifications(localStorage.getItem("sessuid"))
      .then(notificationResp => {
        let notification = notificationResp;
        this.setState({ notification: notification })
      })
  }
}
export default Notification;