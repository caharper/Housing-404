import React, { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Navbar from "./Navbar";



class FindRoomate extends Component {

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
    type: "",
    gender: "",

  }

  updateType = (e) => {
    this.setState({ type: e.type.value })
  }

  updateGender = (e) => {
    this.setState({ gender: e.target.value })
  }

  filteredItems() {
    let { items, type, gender } = this.state;
    if (!type) return items;
    return items.filter(item => {
      return item.type === type &&
        item.gender === gender
    })
  }

  render() {
    const { items, type } = this.state;


    return (
      <>
        <div>
          <Navbar></Navbar>
        </div>
        <Container>

          <Row className="Apartment Results">

            <Col className="Filter" md={2}>

              <div>
                <Form.Group controlId="location">
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="select"
                    value={type}
                    onChange={this.updateType}
                  >
                    <option></option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="townHouse">Townhouse </option>
                    <option value="condo">Condo</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <div>
                <Form.Label>Gender</Form.Label>
                <Form className="gender">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Male" type={type} id={`inline-${type}-Male`} />
                      <Form.Check inline label="Female" type={type} id={`inline-${type}-Female`} />
                      <Form.Check inline label="Other" type={type} id={`inline-${type}-Female`} />
                    </div>
                  ))}
                </Form>
              </div>

              <div>
                <Form.Label>Smoker</Form.Label>
                <Form className="smoker">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Smoker" type={type} id={`inline-${type}-Male`} />
                      <Form.Check inline label="Non-Smoker" type={type} id={`inline-${type}-Female`} />
                    </div>
                  ))}
                </Form>
              </div>

            </Col>

            <Col className="Search">
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

                  <div>
                    <button type="button" className="btn btn-default user-button" aria-label="Right Align">
                      Add to Archive
                </button>
                  </div>
                </div>
              ))}


            </Col>
          </Row>

        </Container>
      </>

    );
  }
}

export default FindRoomate;
