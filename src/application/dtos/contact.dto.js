import Joi from "joi";

export const contactSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    phone: Joi.string().pattern(/^[0-9]{7,15}$/).required(),
    email: Joi.string().email().required()
});
