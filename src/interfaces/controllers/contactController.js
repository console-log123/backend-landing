class ContactController {
  constructor(service) {
    this.service = service;
  }

  createContact = async (req, res) => {
    try {
      req.logger.info('Creando contacto...');
      const result = await this.service.createContact(req.body);
      res.status(201).json(result);
    } catch (error) {
      req.logger.error('Error al crear contacto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

export default ContactController;