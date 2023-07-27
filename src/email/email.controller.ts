import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(
        private readonly emailService: EmailService,
    ) { }

    @Get('confirm_email')
    async sendEmail(@Query('email') email: string) {
        console.log(email, 'controller');

        return this.emailService.sendConfirmationEmail(email)
    }

}
