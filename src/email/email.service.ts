import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'
import { error } from 'console';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) { }

    sendConfirmationEmail(email: string,): void {
        this.mailerService.sendMail({
            to: email,
            from: 'get@952clo.com',
            subject: 'Email Verification',
            template: '/welcome'
        });
    }
}
