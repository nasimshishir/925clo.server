import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserFormat, UserInteractionsFormat } from './utils/types';
import { encodePassword } from 'src/auth/utils/bcrypt';
import { Users } from './entities/user.entity';
import { UserInteractions } from './entities/inreractions.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(UserInteractions) private userInteractionsRepository: Repository<UserInteractions>,
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
    } else {
      throw new HttpException('User not found', HttpStatus.FOUND)
    }

  }

  async saveResetToken(email: string, token: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      user.passwordResetToken = token;
      await this.usersRepository.save(user);
      return user.passwordResetToken
    } else {
      throw new HttpException('User not found', HttpStatus.FOUND)
    }
  }

  async changePasswordByToken(email: string, token: string, newPassword: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      if (user.passwordResetToken === token) {
        user.password = newPassword;
        user.passwordResetToken = null;
        await this.usersRepository.save(user);
        return {
          success: true,
          massage: "Password successfully changed"
        };
      } else {
        return {
          success: false,
          massage: "Token Expired"
        };
      }
    } else {
      throw new HttpException('User Not Found', HttpStatus.FOUND)
    }
  }

  async userInteractions(id: number): Promise<UserInteractionsFormat | string> {
    const userDB = await this.usersRepository.findOne({ where: { id } });
    if (userDB) {
      const liked_products = await this.userInteractionsRepository.createQueryBuilder()
        .select(['product'])
        .where("userId", { userId: userDB.id })
        .where('type', { type: 'liked' })
        .getMany()
      const disliked_products = await this.userInteractionsRepository.createQueryBuilder()
        .select(['product'])
        .where("userId", { userId: userDB.id })
        .where('type', { type: 'disliked' })
        .getMany()

      const userInteraction = {
        liked_products,
        disliked_products
      }
      return userInteraction;
    } else {
      throw new HttpException('User Not Found', HttpStatus.FOUND)
    }
  }
}
