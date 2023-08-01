const Joi = require('joi');

const authschema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email().required(),

    password: Joi.string()
        .min(3)
        .max(30)
        .required(),

    // role: Joi.string().required()
})

module.exports = authschema