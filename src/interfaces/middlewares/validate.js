export const validate = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        if (req.logger) {
            req.logger.warn(
                `Error de validación Joi: ${JSON.stringify({
                    path: req.path,
                    method: req.method,
                    errors: error.details
                })}`
            );
        }

        return res.status(400).json({ errors: error.details });
    }

    req.validateBody = value;
    next();
};
