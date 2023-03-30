import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { getMailConfig } from '../configs/mail.config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      // imports: [ConfigModule], // import module if not enabled globally
      useFactory: getMailConfig
    })
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
