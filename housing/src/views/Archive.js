import React, { Component } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Navbar from "./Navbar";



export default class Archive extends Component {
  state = {
    items: [
      {
        type: 'Apartment',
        name: "Haya", gender: "student", img: "https://via.placeholder.com/150"
      },
      {
        gender: 'female', type: 'house',
        name: "Bob", gender: "student", img: "https://via.placeholder.com/150"
      }
    ],
  }

  render() {
    const { items, type } = this.state;
    return (
      <>
        <div>
          <Navbar></Navbar>
        </div>
        <Container>
          {this.filteredItems().map(item => (
            <div>
              <div>Name: {item.name}</div>
              <div> Gender: {item.gender}</div>
              <div> Age: {item.age}</div>
              <div> Smoker: {item.smoker}</div>
              <div> Tidyness: {item.tidyness}</div>
              <div> Smoker: {item.smoker}</div>
              <div> Year: {item.yearP}</div>
              <div> Temp: {item.temp}</div>
              <div> bedTimeP: {item.bedTimeP}</div>
              <div> Wake Up Time: {item.wakeTime}</div>
              <div> Wake Up Time: {item.wakeTimeP}</div>
              <div> Pets: {item.pets}</div>
              <div className="image searched">
                <img src={item.img} />
              </div>
            </div>
          ))}

          <div>
            <button type="button" className="btn btn-default user-button" aria-label="Right Align">
              Remove
          </button>
          </div>

        </Container>
      </>
    );
  }
}

