module.exports = class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getMake() {
        return this.make;
    }
}
