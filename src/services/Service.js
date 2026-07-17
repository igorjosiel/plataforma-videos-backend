const dataSource = require("../models");

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRegisters() {
        return dataSource[this.model].findAll();
    }

    async getRegisterById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async updateRegister(updatedData, id) {
        const updatedRegistersList = await dataSource[this.model].update(
            updatedData,
            {
                where: { id: id }
            }
        );

        if (updatedRegistersList[0] === 0) {
            return false;
        }

        return true;
    }

    async deleteRegister(id) {
        const deletedRegistersList = await dataSource[this.model].destroy({
            where: { id: id }
        });

        if (deletedRegistersList === 0) {
            return false;
        }

        return true;
    }
}

module.exports = Services;
