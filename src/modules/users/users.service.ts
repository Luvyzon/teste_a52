import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    await this.userRepository.save(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findBy({ id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    await this.userRepository.update(id, updateUserDto);
    return { message: 'Usuário atualizado com sucesso' };
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
    return { message: 'Usuário removido com sucesso' };
  }
}
