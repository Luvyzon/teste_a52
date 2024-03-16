import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Clifor1710605125001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clifor',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'cpf_cnpj',
            type: 'varchar',
          },
          {
            name: 'contato',
            type: 'varchar',
          },
          {
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'cidade',
            type: 'varchar',
          },
          {
            name: 'estado',
            type: 'varchar',
          },
          {
            name: 'cli_for',
            type: 'varchar',
          },
          {
            name: 'ativo',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clifor');
  }
}
