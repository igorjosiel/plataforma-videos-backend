const converterIds = require("../utils/converterStringHelper");

class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAll(req, res) {
        try {
            const registersList = await this.entityService.getAllRegisters();
            
            return res.status(200).json(registersList);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        const { id } = req.params;

        try {
            const foundRegister = await this.entityService.getRegisterById(Number(id));

            if (foundRegister) {
                return res.status(200).json(foundRegister);
            }

            return res.status(404).json({ message: "Pessoa não encontrada." });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getOne(req, res) {
        const { ...params } = req.params;
        const where = converterIds(params);
        
        try {
            const foundRegister = await this.entityService.getOneRegister(where);

            if (foundRegister) {
                return res.status(200).json(foundRegister);
            }

            return res.status(404).json({ message: "Pessoa não encontrada." });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        const data = req.body;

        try {
            const wasCreated = await this.entityService.createRegister(data);

            if (!wasCreated) {
                return res.status(400).json({ message: "Registro não cadastrado." });
            }

            return res.status(200).json({ message: "Criado com sucesso." });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        const { ...params } = req.params;
        const updatedData = req.body;

        const where = converterIds(params);
        
        try {
            const wasUpdated = await this.entityService.updateRegister(updatedData, where);

            if (!wasUpdated) {
                return res.status(400).json({ message: "Registro não atualizado. Id inválido." });
            }

            return res.status(200).json({ message: "Atualizado com sucesso." });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            const wasDeleted = await this.entityService.deleteRegister(Number(id));

            if (!wasDeleted) {
                return res.status(400).json({ message: "Registro não removido. Id inválido." });
            }

            return res.status(200).json({ message: "Removido com sucesso." });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = Controller;
