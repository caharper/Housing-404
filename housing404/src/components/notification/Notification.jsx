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

  replyToNotification(toId){

    // first need to get the user with that id that sent the notification
    // add that in the paramaters passed from below

    // need to have a modal pop up with notification

    this.accountRepository.createNotification(localStorage.getItem("sessuid"), toId, )
      .then(notificationResp => {
        let notification = notificationResp;
        this.setState({ notification: notification })
      })
  }

  notificationModal(){

  }


  render() {
    // console.log(typeof(this.state.notifcation))
    if (!this.state.notification) {
      return (
        <>
          <div><Navbar></Navbar></div>
          <h4 className="pt-5">You have no notifications</h4>
          <div className="eventCard">
            <AddNotification></AddNotification>
          </div>
        </>
      )
    }
    else if (this.state.notification.length === 0) {
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
          <div>
            {this.state.notification.map((notif, index) => (
              <div className="eventCard">
                <div key={index}>
                  <div>From:{notif.name}</div>
                  <div>Email:{notif.email}</div>
                  <div>Notifcation:{notif.notification}</div>
                  <button onClick={() => this.replyToNotification()} className="attendButton">Reply</button>
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
