// import { Router } from 'express';
// import * as controllers from '../controller/productsControllers.js';
// import { validateBody } from '../utils/validateBody.js';
// import { productsAddSchema } from '../validation/productsSchema.js';
// export const productsRouter = Router();

// productsRouter.post(
//   '/',
//   validateBody(productsAddSchema),
//   controllers.addProduct,
// );

import express from 'express';
import * as ctrl from '../controllers/productControllers.js';
import { validateBody } from '../utils/validateBody.js';
import { productsAddSchemas } from '../validation/productsSchemas.js';
import { authinticate } from '../middlewares/authinticate.js';

export const productsRouter = express.Router();

productsRouter.post(
  '/',
  authinticate,
  validateBody(productsAddSchemas),
  ctrl.createProduct,
);
