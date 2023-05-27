import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) { }

  async createUser(userDetails: CreateUserDto) {
    console.log("service user data", userDetails);
    const newUser = this.usersRepository.create(userDetails)
    console.log("service new user", newUser);
    const user = await this.usersRepository.save(newUser)
    return user;
  }


  async findAllUsers(): Promise<Users[]> {
    const users = await this.usersRepository.find();
    return users;
  }


  async findOneUser(id: number): Promise<Users> {
    try {
      const user = await this.usersRepository.findOneByOrFail({ id });
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

  searchOne(username: string): Promise<Users | undefined> {
    return this.usersRepository.findOneBy({ username });

  }
}
