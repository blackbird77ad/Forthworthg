import Joi from "joi";

export const submitContactValidator = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    message: Joi.string()
});