import ContactModel from "../models/contact.model.js";

export class ContactRepository {
    async create(data) {
        return await ContactModel.create(data);
    }
}
