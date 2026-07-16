const Controller = require("./Controller.js");
const PersonServices = require("../services/PersonService.js");

const personServices = new PersonServices();

class PersonController extends Controller {
    constructor() {
        super(personServices);
    }
}

module.exports = PersonController;
