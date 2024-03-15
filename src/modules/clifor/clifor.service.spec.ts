import { Test, TestingModule } from '@nestjs/testing';
import { CliforService } from './clifor.service';

describe('CliforService', () => {
  let service: CliforService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliforService],
    }).compile();

    service = module.get<CliforService>(CliforService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
