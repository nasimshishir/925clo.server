import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) { }

  createUser(userDetails: CreateUserDto) {
    console.log("service user data", userDetails);
    const newUser = this.usersRepository.create(userDetails)
    console.log("service new user", newUser);
    return this.usersRepository.save(newUser);;
  }
  getAllUsers() {
    return this.usersRepository.find();
  }
  getOneUser(id: any) {

    return this.usersRepository.findBy(id);

  }
}
