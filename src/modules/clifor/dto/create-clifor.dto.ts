import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateCliforDto {
  @ApiProperty({
    example: 'João da Silva | Silva Transportes',
    description: 'Nome do cliente',
  })
  @IsString()
  @Length(3, 100)
  nome: string;

  @ApiProperty({
    example: 'Silva Transportes LTDA',
    description: 'Razão social do cliente',
  })
  @IsOptional()
  @IsString()
  @Length(3, 100)
  razao_social: string;

  @ApiProperty({
    example: '111.111.111-11 | 11.111.111/1111-11',
    description: 'CPF ou CNPJ do cliente/Fornecedor',
  })
  @IsString()
  @Length(11, 14)
  @IsNumber({ maxDecimalPlaces: 0 })
  cpf_cnpj: string;

  @ApiProperty({
    example: '499999999999',
    description: 'Contato do Cliente/Fornecedor',
  })
  @IsString()
  @Length(3, 100)
  contato: string;

  @ApiProperty({
    example: 'silvaQ@example.com',
    description: 'E-mail do cliente',
  })
  @IsOptional()
  @IsString()
  @Length(3, 100)
  email: string;

  @ApiProperty({
    example: '99999-999',
    description: 'CEP do cliente',
  })
  @IsOptional()
  @IsString()
  @Length(8, 8)
  @IsNumber({ maxDecimalPlaces: 0 })
  @Max(99999999)
  @Min(10000000)
  cep: number;

  @ApiProperty({
    example: 'Av. das Nações Unidas, 1000',
    description: 'Endereço do cliente',
  })
  @IsOptional()
  @IsString()
  @Length(3, 100)
  endereco: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Cidade do cliente',
  })
  @IsOptional()
  @IsString()
  @Length(3, 100)
  cidade: string;

  @ApiProperty({
    example: 'SP',
    description: 'Estado do cliente',
  })
  @IsOptional()
  @IsString()
  @Length(2, 2)
  estado: string;

  @ApiProperty({
    example: 1,
    description: '1 - Cliente | 2 - Fornecedor',
  })
  @IsNumber()
  @Length(1, 1)
  @Min(1)
  @Max(2)
  cli_for: number;

  @ApiProperty({
    example: 1,
    description: '1 - Ativo | 0 - Inativo',
  })
  @IsNumber()
  @Length(1, 1)
  @Min(0)
  @Max(1)
  ativo: number;
}
