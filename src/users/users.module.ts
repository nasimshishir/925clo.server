import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { UserProfile } from './entities/userProfile.entity';
import { StyleProfile } from './entities/styleProfile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, UserProfile, StyleProfile])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
