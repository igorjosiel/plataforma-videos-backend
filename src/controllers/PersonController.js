const database = require("../models");

class PessoaController {
    static async getAll(req, res) {
        try {
            const peopleList = await database.Person.findAll();
            
            return res.status(200).json(peopleList);
        } catch (error) {

        }
    }
}

module.exports = PessoaController;
