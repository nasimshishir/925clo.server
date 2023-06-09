import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from './utils/bcrypt';
import { Users } from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {

        const user = await this.usersService.searchOne(username);

        if (user) {
            const matched = comparePasswords(pass, user.password);
            if (matched) {
                const { password, username, ...rest } = user;
                return rest;
            }
        }

        return null;
    }

    async login(user: Users) {
        console.log(user);

        const payload = {
            username: user.username,
            user: {
                email: user.email,
            }
        };
        return {
            ...user,
            accessToken: this.jwtService.sign(payload)
        }
    }
}
