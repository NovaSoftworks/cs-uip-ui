import pino from 'pino';

import { ENVIRONMENT, LOG_LEVEL } from './config';

const parentLogger = pino({
  base: { environment: ENVIRONMENT },
  transport: {
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'UTC:yyyy-mm-dd HH:MM:ss',
          include: 'level,response,time',
          messageFormat: '[{environment}:client::{action}:{parameters}] {msg}'
        },
        level: LOG_LEVEL
      }
    ]
  }
});

export function createLogger(action?: string, parameters?: string) {
  const logger = parentLogger.child({ action, parameters });
  logger.level = LOG_LEVEL; // Ensure the child logger uses the configured log level
  return logger;
}
