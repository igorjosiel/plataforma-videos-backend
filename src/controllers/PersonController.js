const Controller = require("./Controller.js");
const PersonServices = require("../services/PersonServices.js");

const personServices = new PersonServices();

class PersonController extends Controller {
    constructor() {
        super(personServices);
    }

    async getActiveRegistrations(req, res) {
        const { student_id } = req.params;

        try {
            const registrationsList = await personServices.getActiveRegistrationsByStudent(Number(student_id));

            return res.status(200).json(registrationsList);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAllRegistrations(req, res) {
        const { student_id } = req.params;

        try {
            const registrationsList = await personServices.getAllRegistrationsByStudent(Number(student_id));

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
