import { Router } from 'express';
import * as controllers from '../controller/productsControllers.js';
import { validateBody } from '../utils/validateBody.js';
import { productsAddSchema } from '../validation/productsSchema.js';
export const productsRouter = Router();

productsRouter.post(
  '/',
  validateBody(productsAddSchema),
  controllers.addProduct,
);
