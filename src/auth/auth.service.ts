import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from './utils/bcrypt';
import { Users } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<{
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        createdAt: Date;
        updateddAt: Date;
    } | null> {

        const user = await this.usersService.searchOne(username);

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
        const payload = {
            email: user.email,
            user: {
                name: user.name,
            }
        };
        return {
            ...payload,
            accessToken: this.jwtService.sign(payload),
            refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' })
        }
    }


    async refreshToken(user: Users) {
        const payload = {
            email: user.email,
            user: {
                name: user.name,
            }
        };
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}
