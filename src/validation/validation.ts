import Joi from "joi";

export const UserPost = Joi.object({
    first_name: Joi.string().min(2).required(),
    last_name: Joi.string().min(2).required(),
    email: Joi.string().required()
})

export const UserUpdate = Joi.object({
    first_name: Joi.string().min(2),
    last_name: Joi.string().min(2),
    email: Joi.string()
})