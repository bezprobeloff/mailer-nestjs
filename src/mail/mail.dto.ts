import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SendMailDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  public name: string;

  @IsEmail()
  public email: string;
}
