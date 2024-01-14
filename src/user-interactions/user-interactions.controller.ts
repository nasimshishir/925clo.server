import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserInteractionsService } from './user-interactions.service';
import { CreateUserInteractionsDto } from 'src/user-interactions/dto/create-interactions.dto';

@Controller('user-interactions')
export class UserInteractionsController {
  constructor(
    private readonly userInteractionsService: UserInteractionsService
  ) { }

  @Post('interactions/add')
  async createInteractions(@Body() CreateUserInteractionsData: CreateUserInteractionsDto) {
    const newUserInteraction = await this.userInteractionsService.createUserInteractions(CreateUserInteractionsData)
    return {
      status: HttpStatus.ACCEPTED,
      message: "Interaction Saved Successfully",
      newUserInteraction
    };
  }

  @Get('interactions/:id')
  async getUserInteractions(@Param('id', ParseIntPipe) id: number) {
    return await this.userInteractionsService.getUserInteractions(id)
  }
}
