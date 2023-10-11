import React, { useState } from 'react';
import { Breadcrumb, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CreateForm() {
  // State to hold the form values
  const [car, setCar] = useState({
    name: '',
    make: '',
    model: '',
    year: '',
    color: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // You can send the car data to your API or perform any other actions here
    console.log('Car data:', car);

    // Clear the form after submission
    setCar({
      name: '',
      make: '',
      model: '',
      year: '',
      color: '',
    });
  };

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/cars' }}>
          Cars
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Create</Breadcrumb.Item>
      </Breadcrumb>

      <h2>Create a New Car</h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="make" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={car.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="make" className="mb-3">
              <Form.Label>Make</Form.Label>
              <Form.Select
                type="text"
                name="make"
                value={car.make}
                onChange={handleInputChange}
                required
              >
                <option>Unknown</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="model" className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Select
                type="text"
                name="model"
                value={car.model}
                onChange={handleInputChange}
                required
              >
                <option>Unknown</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="year" className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Select
                type="number"
                name="year"
                value={car.year}
                onChange={handleInputChange}
                required
              >
                <option>Unknown</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="model" className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Select
                type="text"
                name="color"
                value={car.color}
                onChange={handleInputChange}
                required
              >
                <option>Unknown</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Create Car
        </Button>
      </Form>
    </Container>
  );
}
