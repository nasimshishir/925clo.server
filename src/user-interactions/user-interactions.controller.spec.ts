import { Test, TestingModule } from '@nestjs/testing';
import { UserInteractionsController } from './user-interactions.controller';
import { UserInteractionsService } from './user-interactions.service';

describe('UserInteractionsController', () => {
  let controller: UserInteractionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInteractionsController],
      providers: [UserInteractionsService],
    }).compile();

    controller = module.get<UserInteractionsController>(UserInteractionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
