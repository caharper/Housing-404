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
            <div className="row justify-content-center pb-2">
              <h1>Notifications</h1>
            </div>
          <h4 className="pt-5">You have no notifications</h4>
        </>
      )
    }

    if(true){
      console.log(this.state.notification)
    }
    return (
      <>
        <div>
          <Navbar></Navbar>
        </div>

        <div className="row justify-content-center pb-2">
          <h1>Notifications</h1>
        </div>

      <table className="table table-striped table-condenced">
        <thead>
          <tr>
            <th>From</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.notification.map((notif, i) =>
              <tr key={i}>
                <td>{notif.name}</td>
                <td>{notif.email}</td>
              </tr>
            )
          }
        </tbody>
      </table>
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
