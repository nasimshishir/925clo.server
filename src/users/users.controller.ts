import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() userData: CreateUserDto) {
    console.log("controller", userData);

    return this.usersService.createUser(userData);
  }

  @Get()
  getUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOneUser(id)
  }
}