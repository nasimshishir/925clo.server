import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Timestamp } from "typeorm";


@Injectable()
export class localAuthStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<{
        id: number;
        email: string;
        emailVerified: boolean;
        createdAt: Timestamp;
        updateddAt: Timestamp;
    }> {
        const user = await this.authService.validateUser(username, password)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}