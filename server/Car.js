const Vehicle = require('./Vehicle.js');

module.exports = class Car extends Vehicle {
    constructor(make, model, color, trim, s) {
        super(make, model, color);

        this.trim = trim;
        this.speed = s;
    }
}
