import React, { Component } from 'react';
import { Notification } from '../../models/notification'
import { AccountRepository } from '../../api/accountRepository';



export default class AddNotification extends Component {
    accountRepository = new AccountRepository;

    state = {
        AddNotification: null,
        notification: null,
    }

    updateNotification = (e) => {
        this.setState({ notification: e.target.value || null })
    }


    render() {
        return (
            <div>
                <h2>Notification</h2>
                <label for="exampleFormControlTextarea1">Notification</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.updateNotification} value={this.notification}></textarea>

                <button class="resetButton">Submit</button>
            </div>

        );
    }

}
