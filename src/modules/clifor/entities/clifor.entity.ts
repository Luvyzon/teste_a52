import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

@Entity({ name: 'clifor' })
export class Clifor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  razao_social: string;

  @Column()
  cpf_cnpj: string;

  @Column()
  contato: string;

  @Column()
  email: string;

  @Column()
  cep: number;

  @Column()
  endereco: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cli_for: number;

  @Column()
  ativo: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeUpdate()
  updateDates() {
    this.updated_at = new Date();
  }
}
