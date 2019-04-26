import React, { Component } from 'react';
import Navbar from "../Navbar";



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
          {items.map(item => (
            <div>
              <div>Name: {item.name}</div>
              <div> Gender: {item.gender}</div>
              <div> Smoker: {item.smoker}</div>
              <div> Tidyness: {item.tidyness}</div>
              <div> Smoker: {item.smoker}</div>
              <div> Year: {item.year}</div>
              <div> Temp: {item.temp}</div>
              <div> Wake Up Time: {item.wakeTime}</div>
              <div> Pets: {item.pets}</div>
              <div className="image searched">
                <img src={item.img} />
              </div>
              <button onClick={this.remove}>Remove</button>

            </div>
          ))}

        </div>
      </>
    );
  }
}

