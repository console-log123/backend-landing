import mongoose from "mongoose";
import dotenv from "dotenv";
import { Logger } from "../../shared/logger/Logger.js";

// Cargar las variables de entorno
dotenv.config();

export class MongoConnection {
  constructor() {
    if (MongoConnection.instance) {
      return MongoConnection.instance;
    }

    this.connected = false;
    MongoConnection.instance = this;
  }

  async connect() {
    if (this.connected) {
      Logger.info('Ya estás conectado a MongoDB');
      return;
    }

    const {
      MONGO_HOST,
      MONGO_PORT,
      MONGO_DB,
      MONGO_USER,
      MONGO_PASS,
    } = process.env;

    const uri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      this.connected = true;
      Logger.info('Conectado a MongoDB');
    } catch (error) {
      Logger.error('Error al conectar a MongoDB:', error.message);
      throw error;
    }
  }

  getConnection() {
    return mongoose.connection;
  }
}
