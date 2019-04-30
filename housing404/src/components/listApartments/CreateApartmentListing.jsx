import React, { Component } from 'react';
import { ApartmentProgressBar } from './ApartmentProgressbar'
// import { LoginNav } from './LoginNav'
import { AccountRepository } from './../../api/accountRepository'
// import { LoginInformation } from './LoginInformation'
import { CreateApartmentListingForm } from './CreateApartmentListingForm'
import Navbar from "../Navbar";

// import './homepage.css'




export class CreateApartmentListings extends React.Component {
  accountRepository = new AccountRepository

  state = {
    // this will need to be routed if true
    // loggedIn: false,
    createdApt: false
  }
  //
  // onLogin(attemptUser) {
  //   // works
  //   this.accountRepository.login(attemptUser)
  //     .then(loggedIn => this.setState({ loggedIn }))
  // }

  onCreateApt(newApt) {
    let sessuid = localStorage.getItem("sessuid")
    this.accountRepository.createApartment(newApt, sessuid)
      .then(createdApt => this.setState({ createdApt }))
  }


  render() {

    // The markup for the Step 1 UI
    return (


      <>
        <div>
          <Navbar></Navbar>
        </div>


        <div className="container d-none d-lg-block">
          <div className="row">
            <ApartmentProgressBar></ApartmentProgressBar>
          </div>
          <div className="row justify-content-center">
            <CreateApartmentListingForm onCreateApt={x => this.onCreateApt(x)}></CreateApartmentListingForm>
          </div>
        </div>

        <div className="container d-lg-none pt-3">
          <div className="row justify-content-center">
            <CreateApartmentListingForm onCreateApt={x => this.onCreateApt(x)}></CreateApartmentListingForm>
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

export default CreateApartmentListings
