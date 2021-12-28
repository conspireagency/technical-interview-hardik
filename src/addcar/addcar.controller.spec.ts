import { Test, TestingModule } from '@nestjs/testing';
import { AddcarController } from './addcar.controller';
import { AddcarService } from './addcar.service';

describe('AddcarController', () => {
  let controller: AddcarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddcarController],
      providers: [AddcarService],
    }).compile();

    controller = module.get<AddcarController>(AddcarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
