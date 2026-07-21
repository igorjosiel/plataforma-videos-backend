const dataSource = require("../database/models");

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRegisters() {
        return dataSource[this.model].findAll();
    }

    async getRegistersByScope(scope) {
        return dataSource[this.model].scope(scope).findAll();
    }

    async getRegisterById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async createRegister(data) {
        const createdRegister = await dataSource[this.model].create(data);
        
        if (createdRegister[0] === 0) {
            return false;
        }

        return true;
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
