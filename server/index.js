const Car = require('./Car.js');
const Truck = require('./Truck.js');

const myCar = new Car('Honda', 'CR-V', 'Blue', 'EX-L', 0);
const dadsTruck = new Truck('Chevy', 'Silverado', 'Green', '3500', 0, 0);

console.debug(myCar, dadsTruck);
