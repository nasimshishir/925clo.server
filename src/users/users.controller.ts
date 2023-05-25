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
  getUsers(@Param('id', ParseIntPipe) id: number) {
    if (id) {
      return this.usersService.getOneUser(id)
    }

    return this.usersService.getAllUsers();
  }

}