import React, { Component } from 'react';
import Navbar from "../Navbar";
import './archive.css';



export default class Archive extends Component {
  state = {
    items: [
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
    const { items, type } = this.state;
    return (
      <>
        <div>
          <Navbar></Navbar>
        </div>

        <div>
          <h1>Archived</h1>
          
          {items.map(item => (
            <div className="archiveResult" >
              <div className="row">

                <div className="col-sm img">
                  <div className="archiveImage">
                    <img src={item.img} />
                  </div>
                </div>

                <div className="col col-mg-8 items">
                  <div>Name: {item.name}</div>
                  <div> Gender: {item.gender}</div>
                  <div> Smoker: {item.smoker}</div>
                  <div> Tidyness: {item.tidyness}</div>
                  <div> Smoker: {item.smoker}</div>
                  <div> Year: {item.year}</div>
                  <div> Temp: {item.temp}</div>
                  <div> Wake Up Time: {item.wakeTime}</div>
                  <div> Pets: {item.pets}</div>
                </div>

                <div className="col-sm button">
                  <button onClick={this.remove} className="removeButton">Remove</button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </>
    );
  }
}

