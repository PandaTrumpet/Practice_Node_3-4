import { Router } from 'express';
import * as controllers from '../controller/productsControllers.js';
export const productsRouter = Router();

productsRouter.post('/', controllers.addProduct);
