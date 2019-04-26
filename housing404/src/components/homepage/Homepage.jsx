import React, { Component } from 'react';
import { ProgressBar } from './Progressbar'
// /Users/clayharper/Desktop/Housing 404/housing404/src/components/homepage/ProgressBar.jsx
import { LoginNav } from './LoginNav'
import { AccountRepository } from './../../api/accountRepository'
import { LoginInformation } from './LoginInformation'
import { CreateAccountForm } from './CreateAccountForm'
import './homepage.css'
import logo from './../../housing404.svg';

import axios from 'axios'




export class Homepage extends React.Component {
  accountRepository = new AccountRepository

  state = {
      // this will need to be routed if true
      loggedIn: false,
      createdAccount: false
    }

    onLogin(attemptUser){
      // works
      this.accountRepository.login(attemptUser)
      .then(loggedIn => this.setState({ loggedIn }))
    }

    onCreateAccount(newUser){
      this.accountRepository.login(newUser)
      .then(createdAccount => this.setState({ createdAccount }))
    }


  render() {

    // The markup for the Step 1 UI
    return(

      <>
        <LoginNav onLogin={x => this.onLogin(x) }></LoginNav>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="row justify-content-center mt-0 pt-0 mb-0 pb-0">
                <h1>Find your roommate</h1>
                <p className="text-secondary">By joining Housing404, you can search for roommates, filter out by roommate qualities, set up meeting times, and find your ideal roommate.</p>
              </div>
              <div className="row justify-content-center mb-0 pb-0">
                <img className="img-fluid" src={logo}></img>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <ProgressBar></ProgressBar>
              </div>
              <div className="row justify-content-center">
                <CreateAccountForm onCreateAccount={x => this.onCreateAccount(x) }></CreateAccountForm>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // WORKS
  // componentDidMount() {
  // this.accountRepository.getUsers()
  //   .then(users => {
  //     this.setState({ users })
  //     console.log(users)
  //     }
  //   )
  //   // console.log(this.state.users)
  // }

  // componentDidMount() {
  //   axios.get(`http://18.224.138.138:3000/users`)
  //   // axios.get(`https://ec2-18-224-138-138.us-east-2.compute.amazonaws.com`)
  //   // axios.get(`http://p-172-31-24-183.us-east-2.compute.internal`)
  //     .then(res => {
  //       const dataFromServer = res.json();
  //       this.setState({ data: dataFromServer });
  //     });
  // }

  // return new Promise((resolve, reject) => {
  //   axios.get(this.url)
  //   .then(resp => resolve(resp.data))
  //   .catch(resp => alert(resp))
  // })
}

export default Homepage
