import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

interface User {
  email: string;
  name: string;
}
@Injectable()
export class MailService {
  constructor(private mailerService : MailerService) {
  }

  async sendUserConfirmation(user: User) {
    console.log(user.email);
    await this.mailerService.sendMail({
      to: user.email,
      from: '"Тест отправки" <beloff89@mail.ru>',
      subject: 'Привет!',
      template: './confirmation',
      context: {
        name: user.name,
      },
    });
  }
  create() {
    return 'This action adds a new mail';
  }

  findAll() {
    return `This action returns all mail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mail`;
  }

  update(id: number) {
    return `This action updates a #${id} mail`;
  }

  remove(id: number) {
    return `This action removes a #${id} mail`;
  }
}
