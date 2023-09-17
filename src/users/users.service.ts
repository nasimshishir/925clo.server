import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserFormat } from './utils/types';
import { encodePassword } from 'src/auth/utils/bcrypt';
import { StyleProfile } from './entities/styleProfile.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(StyleProfile) private styleProfileRepository: Repository<StyleProfile>,
  ) { }

  async createUser(userDetails: CreateUserFormat) {
    const existingUser = await this.usersRepository.findOne({ where: { email: userDetails.email } });
    if (existingUser) {
      throw new HttpException('Email address already registered', HttpStatus.BAD_REQUEST)
    }
    const hashedPassword = encodePassword(userDetails.password)
    const newUser = this.usersRepository.create({ ...userDetails, password: hashedPassword, emailVerified: false });
    const user = await this.usersRepository.save(newUser)
    const { password, email, ...rest } = user;
    return rest;
  }

  async findAllUsers(): Promise<Users[]> {
    const users = await this.usersRepository.find({
      select: {
        id: true,
        name: true
      }
    })
    return users;
  }


  async findOneUser(id: number): Promise<Users> {
    try {
      const user = await this.usersRepository.findOne({ select: ['id', 'email'], where: { id } });
      if (user) {
        return user;
      } else 'User not found';

    } catch (error) {
      const errorMessage: any = {
        err: error,
        message: 'User not found'
      }
      return errorMessage;
    }
  }

  async searchOne(email: string): Promise<Users | undefined> {
    const user = await this.usersRepository.findOne({ where: { email: email } });
    if (user) {
      return user;
    }
    return undefined;
  }
}

