class ContactControllerBuilder {
    constructor() {
        this.service = null;
        this.ControllerClass = null;
    }

    withService(service) {
        this.service = service;
        return this;
    }

    withController(ControllerClass) {
        this.ControllerClass = ControllerClass;
        return this;
    }

    build() {
        if (!this.service || !this.ControllerClass) {
            throw new Error("Faltan dependencias");
        }

        return new this.ControllerClass(this.service);
    }
}

export default ContactControllerBuilder;