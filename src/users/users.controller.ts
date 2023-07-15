import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) { }


  @UseGuards(JwtGuard)
  @Get()
  async getUsers() {
    return await this.usersService.findAllUsers();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  async getOneUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.findOneUser(id);
  }
}