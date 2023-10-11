import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Breadcrumb,
  Card,
  Col,
  Container,
  Row,
  Stack,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CarsGrid() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cars').then(({ data }) => {
      setCars(data);
    });
  }, []);

  function formatYear(date) {
    return new Date(date).getFullYear();
  }

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Cars</Breadcrumb.Item>
      </Breadcrumb>

      <Stack direction="horizontal" className="mb-5">
        <h2>Car List</h2>
        <Button as={Link} to="/cars/create" className="ms-auto">
          Create Car
        </Button>
      </Stack>

      <Row>
        {cars.map((car) => (
          <Col key={car.id} md={4} sm={6} xs={12} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{car.make}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {car.model}
                </Card.Subtitle>
                <Card.Text>Year: {formatYear(car.year)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
