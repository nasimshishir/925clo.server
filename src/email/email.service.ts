import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) { }

    async sendConfirmationEmail(email: string, uniqueString: string) {
        const mailOptions = {
            from: '"Your Name" <your@email.com>',
            to: email,
            subject: 'Email Verification',
            text: `Please click on the following link to verify your email address:

        http://localhost:3000/email/verify/52526`,
        };

        await this.mailerService.sendMail(mailOptions);
    }
}
