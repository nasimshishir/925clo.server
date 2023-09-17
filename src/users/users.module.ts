import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { StyleProfile } from '../user-profile/entities/styleProfile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, StyleProfile])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
