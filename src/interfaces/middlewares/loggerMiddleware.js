import { Logger } from "../../shared/logger/Logger.js";
export const loggerMiddleware = (req, res, next) => {
  req.logger = Logger;
  next();
};