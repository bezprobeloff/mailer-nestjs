import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { IUser } from './intefaces/mail.interface';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { ENV_MAIL_FROM } from '../utils/constants';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
    private readonly logger: LoggerService
  ) {}

  MAIL_FROM = this.configService.get<string>(ENV_MAIL_FROM);

  async sendUserData(user: IUser) {
    try {
      await this.mailerService.sendMail({
        to: user.email,
        from: `"Тест отправки" <${this.MAIL_FROM}>`,
        subject: 'Привет!',
        template: join(__dirname, '/templates', 'confirmation'),
        context: {
          name: user.name
        }
      });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
