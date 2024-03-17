import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'João da Silva',
    description: 'Nome do usuário',
  })
  @IsString()
  @Length(3, 100)
  nome: string;

  @ApiProperty({
    example: 'admin',
    description: 'Login do usuário',
  })
  @IsString()
  @Length(3, 100)
  username: string;

  @ApiProperty({
    example: 'ABC$1234',
    description: 'Senha do usuário',
  })
  @IsString()
  @Length(8, 100)
  password: string;
}
