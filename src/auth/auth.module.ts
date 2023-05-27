import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/user.entity';
import { localAuthStrategy } from './utils/local.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), PassportModule],
  controllers: [AuthController],
  providers: [AuthService, UsersService, localAuthStrategy]
})
export class AuthModule { }
