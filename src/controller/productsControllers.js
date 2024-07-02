import { ProductsCollection } from '../db/model/product.js';
import { createError } from '../utils/createError.js';
import { productsAddSchema } from '../validation/productsSchema.js';
export const addProduct = async (req, res, next) => {
  try {
    await productsAddSchema.validateAsync(req.body);
    const product = await ProductsCollection.create(req.body);
    res.status(201).json({
      status: 200,
      message: 'Successful',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
