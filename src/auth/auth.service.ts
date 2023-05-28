import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from './utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

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
}
