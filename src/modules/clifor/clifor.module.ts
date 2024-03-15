import { Module } from '@nestjs/common';
import { CliforService } from './clifor.service';
import { CliforController } from './clifor.controller';

@Module({
  controllers: [CliforController],
  providers: [CliforService],
})
export class CliforModule {}
