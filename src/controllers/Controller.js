class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAll(req, res) {
        try {
            const registersList = await this.entityService.getAllRegisters();
            
            return res.status(200).json(registersList);
        } catch (error) {
            // Erro
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
            // Erro
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
            // Erro
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        
        try {
            const wasUpdated = await this.entityService.updateRegister(updatedData, Number(id));

            if (!wasUpdated) {
                return res.status(400).json({ message: "Registro não atualizado. Id inválido." });
            }

            return res.status(200).json({ message: "Atualizado com sucesso." });
        } catch (error) {
            // Erro
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
            // Erro
        }
    }
}

module.exports = Controller;
