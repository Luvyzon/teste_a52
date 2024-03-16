import { Module } from '@nestjs/common';
import { CliforService } from './clifor.service';
import { CliforController } from './clifor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clifor } from './entities/clifor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clifor])],
  controllers: [CliforController],
  providers: [CliforService],
})
export class CliforModule {}
