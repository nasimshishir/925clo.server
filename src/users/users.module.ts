import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { ForgottenPassword } from './entities/reset-passoword.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, ForgottenPassword])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
