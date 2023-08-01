const Joi = require('joi');

const productchema = Joi.object({
  productname: Joi.string()
    .min(0)
    .max(30),

  size: Joi.number(),

  quantity: Joi.number(),
  price: Joi.number()


})

module.exports = productchema