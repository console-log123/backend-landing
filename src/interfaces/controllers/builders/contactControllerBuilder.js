class ContactControllerBuilder {
    constructor() {
        this.service = null;
        this.logger = console;

    }

    withService(service) {
        this.service = service;
        return this;
    }

    withLogger(logger) {
        this.logger = logger;
        return this;
    }

    build() {
        if (!this.service) throw new Error("Servicio es requerido para el controllerbuilder");
        return new ContactControllerBuilder(this.service, this.logger)
    }

}

export default ContactControllerBuilder;