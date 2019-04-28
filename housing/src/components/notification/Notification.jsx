import React, { Component } from 'react';
import Navbar from "../Navbar";


export default class Notification extends Component {
    state = {
        notification: []
    }
    mynotification = () => {
        // request server api call
    }

    render() {
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
}