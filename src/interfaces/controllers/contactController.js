
class ContactController {
  constructor(service, logger) {
    this.service = service;
    this.logger = logger;
  }

  createContact = async (req, res) => {
    try {
      const contact = await this.service.create(req.body);
      this.logger.info("Contacto creado");
      res.status(201).json(contact);
    } catch (error) {
      this.logger.error(error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };
}

export default ContactController;
