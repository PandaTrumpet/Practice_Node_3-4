import express, { json } from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import { productsRouter } from './router/productsRouter.js';
export const startServer = () => {
  const app = express();
  app.use(json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world',
    });
  });
  app.use('/api/products', productsRouter);

  app.use((req, res) => {
    res.status(404).json({
      status: 404,
      message: 'Route not found',
    });
  });

  app.use((err, eq, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
    });
  });
  const { PORT } = env;
  app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
  });
};
