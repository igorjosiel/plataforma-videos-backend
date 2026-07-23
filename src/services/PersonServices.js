const Services = require("./Services.js");

class PersonServices extends Services {
    constructor() {
        super("Person");
    }

    async getActiveRegistrationsByStudent(id) {
        const student = await super.getOneRegister(id);
        const registrationsList = await student.getActiveRegistrations();

        return registrationsList;
    }

    async getAllRegistrationsByStudent(id) {
        const student = await super.getOneRegister(id);
        const registrationsList = await student.getAllRegistrations();

        return registrationsList;
    }

    async getAllPeopleScope() {
        const peopleList = await super.getRegistersByScope("allPeople");

        return peopleList;
    }
}

module.exports = PersonServices;
