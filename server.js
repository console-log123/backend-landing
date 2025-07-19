import express from 'express';
import dotenv from 'dotenv';
import { MongoConnection } from './src/infrastructure/database/MongoConnection.js';
import { Logger } from './src/shared/logger/Logger.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSO
app.use(express.json());

//RUTAS

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
