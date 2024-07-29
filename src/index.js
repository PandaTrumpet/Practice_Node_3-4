// import { startServer } from './server.js';
// import { initMongoConnection } from './db/initMongoConnection.js';
// const bootstrap = async () => {
//   await initMongoConnection();
//   startServer();
// };
// bootstrap();

import { startServer } from './startServer.js';

import { initMongoDB } from './db/initMongoColection.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
