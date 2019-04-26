import React, { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Navbar from "../Navbar";


class FindApt extends Component {
  state = {
    items: [
      {
        name: "Lofts", type: "House", description: "Nice place in dallas", img: "https://via.placeholder.com/150"
      },
      {
        name: "Landmark", type: "Apartment", img: "https://via.placeholder.com/150"
      },
      {
        name: "5MockingBird", type: "Townhouse", img: "https://via.placeholder.com/150"
      }
    ],
    type: "",
    smoke: "",

  }

  updateType = (e) => {
    this.setState({ type: e.target.value })
  }

  updateSmoke = (e) => {
    this.setState({ smoke: e.target.value })
  }

  filteredItems() {
    let { items, type } = this.state;
    if (!type) return items;
    return items.filter(item => {
      return item.type === type

    })
  }

  render() {
    const { items, type } = this.state;


    return (
      <>
        <Navbar></Navbar>
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
                <Form.Label>Smoke</Form.Label>
                <Form className="smoke">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Smoking" type={type} id={`inline-${type}-Smoking`} />
                      <Form.Check inline label="No Smoking" type={type} id={`inline-${type}-NoSmoking`} />
                    </div>
                  ))}
                </Form>
              </div>

              <div>
                <Form.Label>Bedrooms</Form.Label>
                <Form className="bedrooms">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                      <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                      <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
                    </div>
                  ))}
                </Form>
              </div>

              <div>
                <Form.Label>Bathrooms</Form.Label>
                <Form className="checkboxFilter">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                      <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                      <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
                    </div>
                  ))}
                </Form>
              </div>
              <div>
                <Form.Label>Kitchen</Form.Label>
                <Form className="checkboxFilter">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Yes" type={type} id={`inline-${type}-yes`} />
                      <Form.Check inline label="No" type={type} id={`inline-${type}-no`} />
                    </div>
                  ))}
                </Form>
              </div>

              <div>
                <Form.Label>Laundry</Form.Label>
                <Form className="checkboxFilter">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Yes" type={type} id={`inline-${type}-yes`} />
                      <Form.Check inline label="No" type={type} id={`inline-${type}-no`} />
                    </div>
                  ))}
                </Form>
              </div>

              <div>
                <Form.Label>Pets</Form.Label>
                <Form className="checkboxFilter">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Yes" type={type} id={`inline-${type}-yes`} />
                      <Form.Check inline label="No" type={type} id={`inline-${type}-no`} />
                    </div>
                  ))}
                </Form>
              </div>
              <div>
                <Form.Label>Pool</Form.Label>
                <Form className="checkboxFilter">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Yes" type={type} id={`inline-${type}-yes`} />
                      <Form.Check inline label="No" type={type} id={`inline-${type}-no`} />
                    </div>
                  ))}
                </Form>
              </div>

              <div>
                <Form.Label>Gym</Form.Label>
                <Form className="checkboxFilter">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Yes" type={type} id={`inline-${type}-yes`} />
                      <Form.Check inline label="No" type={type} id={`inline-${type}-no`} />
                    </div>
                  ))}
                </Form>
              </div>

              <div>
                <Form.Label>Air Condition</Form.Label>
                <Form className="checkboxFilter">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Yes" type={type} id={`inline-${type}-yes`} />
                      <Form.Check inline label="No" type={type} id={`inline-${type}-no`} />
                    </div>
                  ))}
                </Form>
              </div>

              <div>
                <Form.Label>Heat</Form.Label>
                <Form className="checkboxFilter">
                  {['checkbox'].map(type => (
                    <div key={`inline-${type}`}>
                      <Form.Check inline label="Yes" type={type} id={`inline-${type}-yes`} />
                      <Form.Check inline label="No" type={type} id={`inline-${type}-no`} />
                    </div>
                  ))}
                </Form>
              </div>

            </Col>


            <Col className="Search">

              {this.filteredItems().map(item => (
                <div>
                  <div>Name:{item.name}</div>
                  <div> Type:{item.type}</div>
                  <div> Description:{item.description}</div>
                  <div> Location:{item.location}</div>
                  <div> Rent:{item.rent}</div>
                  <div> Avalibility:{item.leaseTime}</div>
                  <div> Number of Occupants:{item.occupants}</div>
                  <div> Number of Bedrooms:{item.beds}</div>
                  <div> Number of Bathrooms:{item.baths}</div>
                  <div> Sqaure Feet:{item.squareFeet}</div>


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

export default FindApt;