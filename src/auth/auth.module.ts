import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/user.entity';
import { localAuthStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-stategy';


@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule,
    JwtModule.register({
      secret: `${process.env.ACCESS_KEY}`,
      signOptions: { expiresIn: '3600s' }
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    localAuthStrategy,
    JwtStrategy
  ]
})
export class AuthModule { }
