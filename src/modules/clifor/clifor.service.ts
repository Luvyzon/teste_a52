import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCliforDto } from './dto/create-clifor.dto';
import { UpdateCliforDto } from './dto/update-clifor.dto';
import { Clifor } from './entities/clifor.entity';

@Injectable()
export class CliforService {
  constructor(
    @InjectRepository(Clifor)
    private cliforRepository: Repository<Clifor>,
  ) {}
  async create(createCliforDto: CreateCliforDto) {
    await this.cliforRepository.save(createCliforDto);
    return createCliforDto;
  }

  findAll() {
    return this.cliforRepository.find();
  }

  findOne(id: number) {
    return this.cliforRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCliforDto: UpdateCliforDto) {
    const clifor = await this.cliforRepository.findBy({ id });
    if (!clifor) {
      throw new NotFoundException(`Clifor #${id} not found`);
    }
    await this.cliforRepository.update(id, updateCliforDto);
    return { message: 'Cliente/Fornecedor atualizado com sucesso' };
  }

  async remove(id: number) {
    await this.cliforRepository.delete(id);
    return { message: 'Cliente/Fornecedor removido com sucesso' };
  }
}
