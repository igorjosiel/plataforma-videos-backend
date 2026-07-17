class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAll(req, res) {
        try {
            const registersList = await this.entityService.getAllRegisters();
            
            return res.status(200).json(registersList);
        } catch (error) {

        }
    }

    async getById(req, res) {
        const { id } = req.params;

        try {
            const foundPerson = await this.entityService.getRegisterById(Number(id));

            if (foundPerson) {
                return res.status(200).json(foundPerson);
            }

            return res.status(404).json({ message: "Pessoa não encontrada." });
        } catch (error) {

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
            // erro
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
