import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1626628439458 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true
            },
            {
              name: 'nome',
              type: 'varchar',
              length: '100',
              isNullable: false
            },
            {
              name: 'email',
              type: 'varchar',
              length: '100',
              isNullable: false
            },
            {
              name: 'senha',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'admin',
              type: 'tinyint',
              isNullable: true,
              default: 0
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
