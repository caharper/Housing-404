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
      users: []
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
                this.state.users.map((a, i) =>
                  <tr key={i}>
                    <td>
                      {a.id}
                    </td>
                    <td>{a.name}</td>
                    <td>{a.email}</td>

                    <td>{a.password}</td>
                  </tr>
                )
              }
            </tbody>
          </table>

        </div>
      </>
    )
  }

  // WORKS
  componentDidMount() {
  this.accountRepository.getUsers()
    .then(users => {
      this.setState({ users })
      console.log(users)
      }
    )
    // console.log(this.state.users)
  }

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
