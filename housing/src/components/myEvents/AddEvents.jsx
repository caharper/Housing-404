import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository'


export default class AddEvent extends Component {
    accountRepository = new AccountRepository;
    state = {
        addEvents: null,
    }
    render{
    return (
        <div></div>
    );
}

}
export default AddEvent;