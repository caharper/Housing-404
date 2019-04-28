import React, { Component } from 'react';
import Navbar from "../Navbar";
import { AccountRepository } from './../../api/accountRepository';


 class Notification extends Component {
    accountRepository = new AccountRepository;

    state = {
        notification: []
    }


    render() {
        if(this.state.notification === null || this.state.notification === undefined){
            return(
              <>
                <div><Navbar></Navbar></div>
                You have no notification
              </>
            )
          } 
        const { notification } = this.state;
        return (
            <>
                <div>
                    <Navbar></Navbar>
                </div>

                <div>
                    {notification.map(notification => (
                        <div>
                            <div>Notification:{notification.details}</div>
                            <button onClick={this.mynotification}>Delete</button>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    componentDidMount(){
        this.accountRepository.getUserNotifications(localStorage.getItem("sessuid"))
          .then(notificationResp => {
            let notification = notificationResp[0];
            this.setState({notification: notification})
          })
        } 

}
export default Notification;