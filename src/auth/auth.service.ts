import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from './utils/bcrypt';
import { Users } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt'
import { Timestamp } from 'typeorm';
import { EmailService } from 'src/email/email.service';
import * as crypto from 'crypto';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly emailService: EmailService
    ) { }

    async validateUser(email: string, pass: string): Promise<{
        id: number;
        email: string;
        emailVerified: boolean;
        createdAt: Timestamp;
        updateddAt: Timestamp;
    } | null> {

        const user = await this.usersService.searchOne(email);

        if (user) {
            const matched = comparePasswords(pass, user.password);
            if (matched) {
                const { password, ...rest } = user;
                return rest;
            }
        }

        return null;
    }

    async login(user: Users) {
        const payload = user;
        return {
            ...payload,
            accessToken: this.jwtService.sign(payload),
            refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' })
        }
    }


    async refreshToken(user: Users) {
        const payload = {
            user: user.email,
            name: user.name
        };
        return { accessToken: this.jwtService.sign(payload) }

    }

    async requestPasswordReset(email: string): Promise<any> {
        const resetToken = crypto.randomBytes(20).toString('hex');
        return await this.usersService.saveResetToken(email, resetToken);
        // return await this.emailService.sendResetPasswordEmail(email, resetToken);
    }

    async passwordResetByToken(email: string, token: string, newPassword: string): Promise<any> {
        return await this.usersService.changePasswordByToken(email, token, newPassword)
    }
}
