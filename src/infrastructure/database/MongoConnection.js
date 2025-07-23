import mongoose from "mongoose";
import dotenv from "dotenv";
import { Logger } from "../../shared/logger/Logger.js";

dotenv.config();

export const connectToMongo = async () => {
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
    Logger.info("Conectado a MongoDB");
  } catch (error) {
    Logger.error("Error al conectar a MongoDB:", error.message);
    throw error;
  }
};