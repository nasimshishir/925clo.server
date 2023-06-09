import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() request): Promise<any> {
    return await this.authService.login(request.user);
  }

  @Post('register')
  async registerUser(@Body() userData: CreateUserDto) {
    return await this.userService.createUser(userData)
  }

}
