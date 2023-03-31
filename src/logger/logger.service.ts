import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

@Injectable()
export class LoggerService {
  private logger: winston.Logger;
  private transportDailyFile: DailyRotateFile = new DailyRotateFile({
    filename: './logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

  constructor() {
    this.logger = winston.createLogger({
      transports: [this.transportDailyFile]
    });
  }

  log(message: string) {
    this.logger.log('info', message, {
      date: new Date()
    });
  }

  error(message: string, trace?: string, context?: string) {
    this.logger.log('error', message, {
      trace: trace || '',
      context: context || '',
      date: new Date()
    });
  }

  warn(message: string, context?: string) {
    this.logger.log('warn', message, {
      context: context || '',
      date: new Date()
    });
  }

  debug(message: string, context?: string) {
    this.logger.log('debug', message, {
      context: context || '',
      date: new Date()
    });
  }

  verbose(message: string, context?: string) {
    this.logger.log('verbose', message, {
      context: context || '',
      date: new Date()
    });
  }
}
