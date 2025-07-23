import express from 'express';
import { validate } from '../middlewares/validate.js';
import { contactSchema } from '../../application/dtos/contact.dto.js';
import ContactService from '../../application/use-cases/contact.service.js';
import { ContactRepository } from '../../infrastructure/database/repositories/ContactRepository.js';
import ContactController from '../controllers/contactController.js';


const router = express.Router();

// accesso a datos
const repository = new ContactRepository();

// loga de negocio
const service = new ContactService(repository);

// presentacion
const contactController = new ContactController(service);

router.post('/contact', validate(contactSchema), contactController.createContact);

export default router;
