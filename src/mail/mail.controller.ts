import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
interface User {
  email: string;
  name: string;
}
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async create(@Body() user: User) {
    await this.mailService.sendUserData(user);
  }
}
