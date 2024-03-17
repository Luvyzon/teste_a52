import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

export type UserInfo = any;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userExists = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    })

    if (userExists) {
      throw new NotFoundException(`Username already exists`);
    }
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    await this.userRepository.save(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByUsername(username: string): Promise<UserInfo | undefined> {
    return await this.userRepository.findOne({where: { username }});
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
