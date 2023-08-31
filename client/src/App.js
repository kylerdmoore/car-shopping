import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cars').then(({ data }) => {
      setCars(data);
    });
  }, []);

  return (
    <div>
      {cars.map((car) => {
        return (
          <div style={{ marginBottom: '20px' }} key={car.id}>
            <div>Car: {car.name}</div>
            <div>Year: {car.year}</div>
            <div>Model: {car.model}</div>
            <div>Make: {car.make}</div>
            <div>Trim: {car.trim}</div>
            <div>Color: {car.color}</div>
            <div>Options: {car.options?.join(', ')}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
