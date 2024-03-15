import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
} from 'typeorm';

@Entity({ name: 'clifors' })
export class Clifor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  cpf_cnpj: number;
  @Column()
  contato: string;
  @Column()
  cep: number;
  @Column()
  endereco: string;
  @Column()
  cidade: string;
  @Column()
  estado: number;
  @Column()
  cli_for: number;
  @Column()
  ativo: number;
  @CreateDateColumn()
  public created_at: Date;
  @UpdateDateColumn()
  public updated_at: Date;
  @BeforeUpdate()
  updateDates() {
    this.updated_at = new Date();
  }
}
