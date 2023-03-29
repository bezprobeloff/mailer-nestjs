import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

interface User {
  email: string;
  name: string;
}
@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private configService: ConfigService) {}

  async sendUserData(user: User) {
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
