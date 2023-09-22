import { Body, Controller, Get, Param, Post, Query, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';

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
  async registerUser(@Body(ValidationPipe) userData: CreateUserDto) {
    return await this.userService.createUser(userData)
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() request): Promise<{ accessToken: string }> {
    return await this.authService.refreshToken(request.user);
  }

  @Get('request-reset-password/:email')
  async requestResetPassword(@Param('email') email: string): Promise<any> {
    return await this.authService.requestPasswordReset(email)
  }

  @Get('reset-password/:email')
  async resetPassword(@Param('email') email: string, @Query('t') token: string, @Body('password') password: string) {
    return await this.authService.passwordResetByToken(email, token, password);
  }
}
