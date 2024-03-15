import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CliforModule } from './modules/clifor/clifor.module';

@Module({
  imports: [CliforModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
