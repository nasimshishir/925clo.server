import { Injectable } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { Repository } from 'typeorm';
import { StyleProfile } from './entities/styleProfile.entity';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfile) private readonly userProfile: Repository<UserProfile>,
    @InjectRepository(StyleProfile) private readonly styleProfileRepository: Repository<StyleProfile>,
  ) { }
  create(createUserProfileDto: CreateUserProfileDto) {
    return 'This action adds a new userProfile';
  }

  findAll() {
    return `This action returns all userProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userProfile`;
  }

  update(id: number, updateUserProfileDto: UpdateUserProfileDto) {
    return `This action updates a #${id} userProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} userProfile`;
  }
}
