import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserFormat } from './utils/types';
import { encodePassword } from 'src/auth/utils/bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) { }

  async createUser(userDetails: CreateUserFormat) {
    const hashedPassword = encodePassword(userDetails.password)
    const newUser = this.usersRepository.create({ ...userDetails, password: hashedPassword });
    const user = await this.usersRepository.save(newUser)
    const { password, username, ...rest } = user;
    return rest;
  }

  async findAllUsers(): Promise<Users[]> {
    const users = await this.usersRepository.find({
      select: {
        id: true,
        email: true
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

  async searchOne(username: string): Promise<Users | undefined> {
    return await this.usersRepository.findOne({ where: { username: username } });

  }
}
