import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProducts1626474161703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'products',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true
            },
            {
              name: 'nome',
              type: 'varchar',
              length: '70',
              isNullable: false
            },
            {
              name: 'fabricante',
              type: 'varchar',
              length: '100',
              isNullable: false
            },
            {
              name: 'quantidade_estoque',
              type: 'integer',
              isNullable: false
            },
            {
              name: 'valor',
              type: 'integer',
              isNullable: false
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('products');
    }
    
}
