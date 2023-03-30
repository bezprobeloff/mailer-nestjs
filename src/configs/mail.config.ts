import { ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export const getMailConfig = async (configService: ConfigService): Promise<any> => {
  const HOST = configService.get<string>('MAIL_HOST') || 'smtp.mail.ru';
  const PORT = configService.get<number>('MAIL_PORT') || 465;
  const USER = configService.get<string>('MAIL_USER') || '';
  const PASSWORD = configService.get<string>('MAIL_PASSWORD') || '';
  const FROM = configService.get<string>('MAIL_FROM') || '';

  return {
    transport: {
      host: HOST,
      port: PORT,
      secure: true,
      auth: {
        user: USER,
        pass: PASSWORD
      }
    },
    defaults: {
      from: `"No Reply" <${FROM}>`
    },
    template: {
      adapter: new HandlebarsAdapter(),
      options: {
        strict: false
      }
    }
  };
};
