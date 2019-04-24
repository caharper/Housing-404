import React, { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';


class FindRoomate extends Component {

  state = {
    items: [
      {
        country: 'usa',
        name: "Haya", description: "student", img: "https://via.placeholder.com/150"
      },
      {
        gender: 'female', country: 'egypt',
        name: "Bob", description: "student", img: "https://via.placeholder.com/150"
      }
    ],
    country: "",
    gender: "",

  }

  updateCountry = (e) => {
    this.setState({ country: e.target.value })
  }

  updateGender = (e) => {
    this.setState({ gender: e.target.value })
  }

  filteredItems() {
    let { items, country, gender } = this.state;
    if (!country) return items;
    return items.filter(item => {
      return item.country === country &&
        item.gender === gender
    })
  }

  render() {
    const { items, country } = this.state;


    return (
      <Container>
        <Row className="Apartment Results">

          <Col className="Filter" md={2}>

            <Form.Group controlId="location-selector">
              <Form.Label>Location</Form.Label>
              <Form.Control as="select"
                value={country}
                onChange={this.updateCountry}
              >
                <option></option>
                <option value="china">China</option>
                <option value="usa">USA</option>
                <option value="italy">Italy </option>
                <option value="spain">Spain</option>
                <option value="egypt">Egypt</option>
              </Form.Control>
            </Form.Group>

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

          </Col>

          <Col className="Search">
            {this.filteredItems().map(item => (
              <div>
                <div>Name: {item.name}</div>
                <div> description {item.description}</div>
                <div className="image searched">
                  <img src={item.img} />
                </div>
              </div>
            ))}
          </Col>
        </Row>

      </Container>
    );
  }
}

export default FindRoomate;
