import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { IUser } from './intefaces/mail.interface';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private configService: ConfigService) {}

  async sendUserData(user: IUser) {
    try {
      await this.mailerService.sendMail({
        to: user.email,
        from: `"Тест отправки" <${this.configService.get<string>('MAIL_FROM')}`,
        subject: 'Привет!',
        template: './confirmation',
        context: {
          name: user.name
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
}
