import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { IUser } from './intefaces/mail.interface';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async create(@Body() user: IUser) {
    await this.mailService.sendUserData(user);
  }
}
