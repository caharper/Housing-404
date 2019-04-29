import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository';
import './notification.css';



 class Notification extends Component {
    accountRepository = new AccountRepository;

    state = {
        notification: []
    }


    render() {
        // console.log(typeof(this.state.notifcation))
        if(!this.state.notification){
            return(
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

              <div>
                {this.state.notification.map((notif,  index) => (
                    <div key={index}>
                        <div>From:{notif.name}</div>
                        <div>Email:{notif.email}</div>
                        <div>Notifcation:{notif.notification}</div>
                    </div>
                ))}
              </div>
            </>
        );
    }

    componentDidMount(){
        this.accountRepository.getUserNotifications(localStorage.getItem("sessuid"))
          .then(notificationResp => {
            let notification = notificationResp;
            this.setState({notification: notification})
          })
        }

}
export default Notification;
