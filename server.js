import express from 'express';
import dotenv from 'dotenv';
import { connectToMongo } from './src/infrastructure/database/mongoConnection.js';
import { Logger } from './src/shared/logger/Logger.js';
import router from './src/interfaces/routes/contact.routes.js';
import { loggerMiddleware } from './src/interfaces/middlewares/loggerMiddleware.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSO
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);


//RUTAS
app.use('/api', router);

const startServer = async () => {
  try {
    await connectToMongo();
    app.listen(PORT, () => {
      Logger.info(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    Logger.error('Error al iniciar el servidor',error)
    process.exit(1);
  }
};

startServer();
