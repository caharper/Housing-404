import React, { Component } from 'react';
import { ProgressBar } from './../ProgressBar'
import { LoginNav } from './LoginNav'
import { AccountRepository } from './../../api/accountRepository'
import { Step1 } from './Step1'

import axios from 'axios'




export class Homepage extends React.Component {
  accountRepository = new AccountRepository

  state = {
      userName: '',
      rating: 0,
      comment: '',
      emails: ''
    }


  render() {

    // The markup for the Step 1 UI
    return(

      <>
        <LoginNav></LoginNav>
        <div className="container">
          <div className="row">
            <ProgressBar></ProgressBar>
          </div>
          <div className="row justify-content-center">
            <Step1></Step1>
          </div>



          <table className="table table-striped table-condenced">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Employee</th>
                <th>Department</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {
                // this.state.emails.map((a, i) =>
                //   <tr key={i}>
                //     <td>{a}</td>
                //   </tr>
                // )
                this.state.emails
              }
            </tbody>
          </table>







        </div>
      </>
    )
  }

  // componentDidMount() {
  // this.accountRepository.getAccounts()
  //   .then(emails => this.setState({ emails }))
  // }

  // componentDidMount() {
  //   axios.get(`http://ec2-18-224-138-138.us-east-2.compute.amazonaws:3000`)
  //   // axios.get(`https://ec2-18-224-138-138.us-east-2.compute.amazonaws.com`)
  //   // axios.get(`http://p-172-31-24-183.us-east-2.compute.internal`)
  //     .then(res => {
  //       const dataFromServer = res.data;
  //       this.setState({ emails: dataFromServer });
  //     });
  // }

  // return new Promise((resolve, reject) => {
  //   axios.get(this.url)
  //   .then(resp => resolve(resp.data))
  //   .catch(resp => alert(resp))
  // })
}

export default Homepage
