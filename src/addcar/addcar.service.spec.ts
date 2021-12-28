import { Test, TestingModule } from '@nestjs/testing';
import { AddcarService } from './addcar.service';

describe('AddcarService', () => {
  let service: AddcarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddcarService],
    }).compile();

    service = module.get<AddcarService>(AddcarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
