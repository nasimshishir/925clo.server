import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserFormat } from './utils/types';
import { encodePassword } from 'src/auth/utils/bcrypt';
import { Users } from './entities/user.entity';
import { ForgottenPassword } from './entities/reset-passoword.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(ForgottenPassword) private forgottenPasswordRepository: Repository<ForgottenPassword>,
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

  async searchOne(email: string): Promise<Users | undefined> {
    const user = await this.usersRepository.findOne({ where: { email: email } });
    if (user) {
      return user;
    }
    return undefined;
  }

  async saveResetToken(email: string, token: string) {
    const user = await this.forgottenPasswordRepository.findOne({ where: { email } });
    if (user) {
      user.resetToken = token;
      await this.forgottenPasswordRepository.save(user);
    } else {
      const resetPassword = this.forgottenPasswordRepository.create({ email, resetToken: token })
      return await this.forgottenPasswordRepository.save(resetPassword);
    }
  }

}
