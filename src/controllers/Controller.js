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

    async update(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        
        try {
            const wasUpdated = await this.entityService.updateRegister(updatedData, Number(id));

            if (!wasUpdated) {
                return res.status(400).json({ message: "Registro não foi atualizado." });
            }

            return res.status(200).json({ message: "Atualizado com sucesso." });
        } catch (error) {
            // erro
        }
    }
}

module.exports = Controller;
