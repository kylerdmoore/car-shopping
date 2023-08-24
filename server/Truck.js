const Vehicle = require('./Vehicle.js');

module.exports = class Truck extends Vehicle {
    /**
     * Create a new truck of type vehicle.
     * @param {string} make - manufacture make
     * @param {string} model 
     * @param {string} color 
     * @param {string} trim 
     * @param {integer} s 
     * @param {integer} payload 
     */
    constructor(make, model, color, trim, s, payload) {
        super(make, model, color);

        this.trim = trim;
        this.speed = s;
        this.payload = payload;
    }

    /**
     * Add this amount to the payload
     * @param {integer} amount 
     * @returns {integer}
     */
    addPayload(amount) {
        this.payload = this.payload + amount;
        return this.payload;
    }

    increaseSpeed() {
        this.speed++;
    }
}