import { Injectable } from '@nestjs/common';
import { CreateCliforDto } from './dto/create-clifor.dto';
import { UpdateCliforDto } from './dto/update-clifor.dto';

@Injectable()
export class CliforService {
  create(createCliforDto: CreateCliforDto) {
    return 'This action adds a new clifor';
  }

  findAll() {
    return `This action returns all clifor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clifor`;
  }

  update(id: number, updateCliforDto: UpdateCliforDto) {
    return `This action updates a #${id} clifor`;
  }

  remove(id: number) {
    return `This action removes a #${id} clifor`;
  }
}
