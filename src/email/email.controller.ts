import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(
        private readonly emailService: EmailService,
    ) { }

    @Get('confirm_email')
    async verifyEmail(@Query('email') email: string) {
        console.log(email, 'controller');

        return await this.emailService.sendConfirmationEmail(email)
    }

    @Get('reset_password')
    async resetPassword(@Query('email') email: string, @Query('resetToken') resetToken: string) {
        return await this.emailService.sendResetPasswordEmail(email, resetToken);
    }

}
