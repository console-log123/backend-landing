export default class ContactService {
    constructor(repository) {
        this.repository = repository;
    }

    async createContact(data) {
        return await this.repository.create(data);
    }
}
