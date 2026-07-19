const Controller = require("./Controller.js");
const RegistrationServices = require("../services/RegistrationServices.js");

const registrationServices = new RegistrationServices();

class CategoryController extends Controller {
    constructor() {
        super(registrationServices);
    }
}

module.exports = CategoryController;
