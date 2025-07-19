import pino from 'pino';

class LoggerClass {
  constructor() {
    if (LoggerClass.instance) {
      return LoggerClass.instance;
    }

    this.logger = pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      },
    });

    LoggerClass.instance = this;
  }

  info(...args) {
    this.logger.info(...args);
  }

  error(...args) {
    this.logger.error(...args);
  }

  warn(...args) {
    this.logger.warn(...args);
  }

  debug(...args) {
    this.logger.debug(...args);
  }
}

// Instancia Unica
export const Logger = new LoggerClass();
