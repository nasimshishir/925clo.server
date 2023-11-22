import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { EmailToken } from './entities/email-verification-token.entity';
import { UserInteractions } from './entities/inreractions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, EmailToken, UserInteractions])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
