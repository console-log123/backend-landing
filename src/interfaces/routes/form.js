import express from 'express';
import { ContactControllerBuilder } from '../controllers/builders/ContactControllerBuilder.js';
import { validate } from '../middlewares/validate.js';
import { contactSchema } from '../../application/dtos/contact.dto.js';
// import ContactService from '../../application/use-cases/contact.service.js';
import { Logger } from '../../shared/logger/Logger.js';

const router = express.Router();

const controller = new ContactControllerBuilder()
    .setService(new ContactService())
    .setLogger(Logger)
    .build();

router.post('/', validate(contactSchema), controller.createContact);

export default router;
