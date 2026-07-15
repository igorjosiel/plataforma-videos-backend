const Services = require("./Service.js");

class PersonServices extends Services {
    constructor() {
        super("Person");
    }
}

module.exports = PersonServices;
