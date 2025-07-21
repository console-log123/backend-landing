import express from 'express';
import ContactControllerBuilder from '../controllers/builders/ContactControllerBuilder.js';
import { validate } from '../middlewares/validate.js';
import { contactSchema } from '../../application/dtos/contact.dto.js';
import ContactService from '../../application/use-cases/contact.service.js';
import { ContactRepository } from '../../infrastructure/database/repositories/ContactRepository.js';
import ContactController from '../controllers/contactController.js';


const router = express.Router();

const repository = new ContactRepository();
const service = new ContactService(repository);

const contactController = new ContactControllerBuilder()
    .withService(service)
    .withController(ContactController)
    .build();

router.post('/contact', validate(contactSchema), contactController.createContact.bind(contactController));

export default router;
