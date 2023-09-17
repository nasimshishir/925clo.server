import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { localAuthStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.stategy';
import jwtConfig from 'jwtconfig';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';


@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule,
    JwtModule.register(jwtConfig)
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    localAuthStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
    UsersService,
  ],
})
export class AuthModule { }
