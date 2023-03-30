import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailDto } from './mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async create(@Body() body: SendMailDto): Promise<SendMailDto> {
    await this.mailService.sendUserData(body);
    return body;
  }
}
