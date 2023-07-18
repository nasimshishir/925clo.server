import { Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailConfirmationService: EmailService) { }

    @Post()
    async confirm(uniqueString: string) {
        const isVerified = await this.emailConfirmationService.verify(uniqueString);

        if (isVerified) {
            return { message: 'Email verified successfully!' };
        } else {
            return { message: 'Invalid verification link.' };
        }
    }
}
