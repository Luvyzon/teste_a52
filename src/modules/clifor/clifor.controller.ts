import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CliforService } from './clifor.service';
import { CreateCliforDto } from './dto/create-clifor.dto';
import { UpdateCliforDto } from './dto/update-clifor.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('clifor')
export class CliforController {
  constructor(private readonly cliforService: CliforService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCliforDto: CreateCliforDto) {
    return this.cliforService.create(createCliforDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.cliforService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('/search')
  findBySearch(@Body() updateCliforDto: UpdateCliforDto) {
    return this.cliforService.findBySearch(updateCliforDto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cliforService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCliforDto: UpdateCliforDto) {
    return this.cliforService.update(+id, updateCliforDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cliforService.remove(+id);
  }
}
