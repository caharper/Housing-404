import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository'


export default class AddEvent extends Component {
    accountRepository = new AccountRepository;
    state = {
        addEvents: null,
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="eventDetail">Event Details</label>
                        <input type="text" className="form-control" id="eventDetail" aria-describedby="detail" placeholder="Event Details"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Event Date</label>
                        <input type="text" className="form-control" id="eventDate" aria-describedby="date" placeholder="Event Date"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}
export default AddEvent;