const Controller = require("./Controller.js");
const PersonServices = require("../services/PersonServices.js");

const personServices = new PersonServices();

class PersonController extends Controller {
    constructor() {
        super(personServices);
    }

    async getRegistrations(req, res) {
        const { studentId } = req.params;

        try {
            const registrationsList = await personServices.getRegistrationsByStudent(Number(studentId));

            return res.status(200).json(registrationsList);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAllPeople(req, res) {
        try {
            const allPeopleList = await personServices.getAllPeopleScope();

            return res.status(200).json(allPeopleList);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PersonController;
