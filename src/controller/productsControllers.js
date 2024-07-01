import { ProductsCollection } from '../db/model/product.js';
export const addProduct = async (req, res, next) => {
  try {
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
