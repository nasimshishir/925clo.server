import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import * as Nodemailer from 'nodemailer'

@Module({
    imports: [MailerModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (config: ConfigService) => {
            const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = config.get('email');
            return Nodemailer.createTransport({
                host: EMAIL_HOST,
                port: EMAIL_PORT,
                secure: true,
                auth: {
                    user: EMAIL_USER,
                    pass: EMAIL_PASSWORD,
                },
            });
        },
    })],
    providers: [EmailService],
    controllers: [EmailController],
})
export class EmailModule { }
