import { ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import {
  ENV_MAIL_FROM,
  ENV_MAIL_HOST,
  ENV_MAIL_PASSWORD,
  ENV_MAIL_PORT,
  ENV_MAIL_USER
} from '../utils/constants';

export const getMailConfig = async (configService: ConfigService): Promise<any> => {
  const HOST = configService.get<string>(ENV_MAIL_HOST) || 'smtp.mail.ru';
  const PORT = configService.get<number>(ENV_MAIL_PORT) || 465;
  const USER = configService.get<string>(ENV_MAIL_USER) || '';
  const PASSWORD = configService.get<string>(ENV_MAIL_PASSWORD) || '';
  const FROM = configService.get<string>(ENV_MAIL_FROM) || '';

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
