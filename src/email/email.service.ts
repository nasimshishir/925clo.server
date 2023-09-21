import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) { }

    async sendConfirmationEmail(email: string,) {
        console.log(email);

        const message = {
            to: email,
            from: 'get@952clo.com',
            subject: 'Email Verification',
            template: 'welcome'
        }

        await this.mailerService.sendMail(message).catch((err) => {
            console.error(err);
        });
        return 'success'

    }

    async sendResetPasswordEmail(email: string, resetToken: string,) {
        const message = {
            to: email,
            from: 'get@952clo.com',
            subject: 'Reset Password',
            template: 'reset-password'
        }

        await this.mailerService.sendMail(message).catch((err) => {
            console.error(err);
        });
        return 'passowrd reset mail send success'
    }
}
