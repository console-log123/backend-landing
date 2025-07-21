class ContactController {
    constructor(service) {
        this.service = service;
    }

    async createContact(req, res) {
        try {
            req.logger.info('Creando contacto...');
            const result = await this.service.createContact(req.body);
            req.logger.info('Contacto creado exitosamente.');
            res.status(201).json(result);
        } catch (error) {
            req.logger.error('Error al crear contacto:', error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default ContactController;