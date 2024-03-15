import { Test, TestingModule } from '@nestjs/testing';
import { CliforController } from './clifor.controller';
import { CliforService } from './clifor.service';

describe('CliforController', () => {
  let controller: CliforController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CliforController],
      providers: [CliforService],
    }).compile();

    controller = module.get<CliforController>(CliforController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
