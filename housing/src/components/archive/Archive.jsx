import React, { Component } from 'react';
import { AccountRepository } from './../../api/accountRepository';
import Navbar from "../Navbar";
import './archive.css';



export default class Archive extends Component {
  accountRepository = new AccountRepository;
  state = {
    archive: [
      {
        type: 'Apartment',
        name: "Haya", gender: "student", img: "https://via.placeholder.com/150"
      },
      {
        gender: 'female', type: 'house',
        name: "Bob", img: "https://via.placeholder.com/150"
      }
    ],

  }
  remove = () => {
    // request server api call

  }

  render() {
    if(this.state.archive === null){
      return(<></>)
    } 
    const { archive, type } = this.state;
    return (
      <>
        <div>
          <Navbar></Navbar>
        </div>

        <div>
          <h1>Archived</h1>
         
            <div className="archiveResult" >
              <div className="row">

                <div className="col-sm img">
                  <div className="archiveImage">
                    <img src={archive.img} />
                  </div>
                </div>

                <div className="col col-mg-8 archives">
                  <div>Name: {archive.name}</div>
                  <div> Gender: {archive.gender}</div>
                  <div> Smoker: {archive.smoker}</div>
                  <div> Tidyness: {archive.tidyness}</div>
                  <div> Smoker: {archive.smoker}</div>
                  <div> Year: {archive.year}</div>
                  <div> Temp: {archive.temp}</div>
                  <div> Wake Up Time: {archive.wakeTime}</div>
                  <div> Pets: {archive.pets}</div>
                </div>

                <div className="col-sm button">
                  <button onClick={this.remove} className="removeButton">Remove</button>
                </div>

              </div>
            </div>
        </div>
      </>
    );
  }

  // componentDidMount(){
  //   console.log(localStorage.getItem("sessuid"))
  //   this.accountRepository.getArchive(localStorage.getItem("sessuid"))
  //     .then(archiveResp => {
  //       console.log(archive)
  //       let archive = archiveResp[0];
  //       this.setState({ archive })
  //       console.log(archive)
  //     })
  // }
}

