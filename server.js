import express from 'express';
import dotenv from 'dotenv';
import { MongoConnection } from './src/infrastructure/database/MongoConnection.js';
import { Logger } from './src/shared/logger/Logger.js';
import router from './src/interfaces/routes/contact.routes.js';
import { loggerMiddleware } from './src/interfaces/middlewares/loggerMiddleware.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSO
app.use(express.json());
app.use(loggerMiddleware);

//RUTAS
app.use('/api', router);

const startServer = async () => {
  try {
    const mongo = new MongoConnection();
    await mongo.connect();

    app.listen(PORT, () => {
      Logger.info(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    Logger.error('Error al iniciar el servidor',error)
    process.exit(1);
  }
};

startServer();
