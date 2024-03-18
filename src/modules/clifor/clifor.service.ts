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

  findBySearch(updateCliforDto: UpdateCliforDto) {
    let query = this.cliforRepository
      .createQueryBuilder('clifor')
      .where('clifor.id is not null');
    if(updateCliforDto.nome)
      query.andWhere('clifor.nome like :nome', { nome: `%${updateCliforDto.nome}%` });
    if(updateCliforDto.razao_social)
      query.andWhere('clifor.razao_social like :razao_social', { razao_social: `%${updateCliforDto.razao_social}%` });
    if(updateCliforDto.cpf_cnpj)
      query.andWhere('clifor.cpf_cnpj like :cpf_cnpj', { cpf_cnpj: `%${updateCliforDto.cpf_cnpj}%` });
    if(updateCliforDto.estado)
      query.andWhere('clifor.estado = :estado', { estado: updateCliforDto.estado });
    if(updateCliforDto.cli_for)
      query.andWhere('clifor.cli_for = :cli_for', { cli_for: updateCliforDto.cli_for });

    return query.getMany();
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
