const Services = require("./Services.js");

class PersonServices extends Services {
    constructor() {
        super("Person");
    }

    async getRegistrationsByStudent(id) {
        const student = await super.getRegisterById(id);
        const registrationsList = await student.getEnrolledClasses();

        return registrationsList;
    }
}

module.exports = PersonServices;
