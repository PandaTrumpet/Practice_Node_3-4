import Joi from 'joi';

export const productsAddSchema = Joi.object({
  name: Joi.string().required().max(64),
  prise: Joi.number().required().min(0),
});
