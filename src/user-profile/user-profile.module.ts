import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileController } from './user-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { StyleProfile } from './entities/styleProfile.entity';
import { Wishlist } from './entities/wishlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile, StyleProfile, Wishlist])],
  controllers: [UserProfileController],
  providers: [UserProfileService]
})
export class UserProfileModule { }
