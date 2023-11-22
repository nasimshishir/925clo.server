import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import "dotenv/config"
import { Users } from 'src/users/entities/user.entity';
import { Request as RequestType } from 'express';


export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWT, ExtractJwt.fromAuthHeaderAsBearerToken()]),
            ignoreExpiration: false,
            secretOrKey: process.env.ACCESS_KEY,
        });
    }

    async validate(payload: { user: Users, email: string }) {
        return { user: payload.user, email: payload.email };
    }


    private static extractJWT(req: RequestType): string | null {
        if (req.cookies &&
            'access_token' in req.cookies &&
            req.cookies.access.length > 0) {
            return req.cookies.access_token
        }
        return null
    }
}

