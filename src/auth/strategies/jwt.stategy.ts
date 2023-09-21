import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import "dotenv/config"
import { Users } from 'src/users/entities/user.entity';


export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.ACCESS_KEY,
        });



    }

    async validate(payload: { user: Users, email: string }) {
        return { user: payload.user, email: payload.email };
    }
}