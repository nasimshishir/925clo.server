import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { UserInteractionsService } from './user-interactions.service';
import { CreateUserInteractionsDto } from 'src/user-interactions/dto/create-interactions.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user-interactions')
export class UserInteractionsController {
  constructor(
    private readonly userInteractionsService: UserInteractionsService
  ) { }

  @UseGuards(JwtGuard)
  @Post('add')
  async createInteractions(@Body() CreateUserInteractionsData: CreateUserInteractionsDto) {
    const newUserInteraction = await this.userInteractionsService.createUserInteractions(CreateUserInteractionsData)
    if (newUserInteraction) {
      return {
        status: HttpStatus.ACCEPTED,
        message: "Interaction Saved Successfully",
        newUserInteraction
      };
    } else {
      return {
        status: HttpStatus.SERVICE_UNAVAILABLE,
        message: "Interaction Save Unsuccessful",
      }
    }
  }

  @Get(':id')
  async getUserInteractions(@Param('id', ParseIntPipe) id: number) {
    return await this.userInteractionsService.getUserInteractions(id)
  }
}
