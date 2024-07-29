// import Joi from 'joi';

// export const productsAddSchema = Joi.object({
//   name: Joi.string().required().max(64),
//   prise: Joi.number().required().min(0),
// });

import Joi from 'joi';

export const productsAddSchemas = Joi.object({
  name: Joi.string().max(64).required(),
  price: Joi.number().min(0).required(),
});
