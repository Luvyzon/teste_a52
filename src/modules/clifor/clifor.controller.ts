import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CliforService } from './clifor.service';
import { CreateCliforDto } from './dto/create-clifor.dto';
import { UpdateCliforDto } from './dto/update-clifor.dto';

@Controller('clifor')
export class CliforController {
  constructor(private readonly cliforService: CliforService) {}

  @Post()
  create(@Body() createCliforDto: CreateCliforDto) {
    return this.cliforService.create(createCliforDto);
  }

  @Get()
  findAll() {
    return this.cliforService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cliforService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCliforDto: UpdateCliforDto) {
    return this.cliforService.update(+id, updateCliforDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cliforService.remove(+id);
  }
}
