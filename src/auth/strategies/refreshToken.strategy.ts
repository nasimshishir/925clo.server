import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import "dotenv/config"


export class RefreshJwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField("refresh"),
            ignoreExpiration: false,
            secretOrKey: process.env.ACCESS_KEY,
        });



    }

    async validate(payload: any) {
        return { user: payload.user, username: payload.username };
    }
}