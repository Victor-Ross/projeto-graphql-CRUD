import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ObjectType, Field } from 'type-graphql';
import { v4 as uuid } from 'uuid';

@ObjectType()
@Entity('products')
class Product {
  @Field({ nullable: false })
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Field({ nullable: false })
  @Column()
  nome: string;

  @Field({ nullable: false })
  @Column()
  fabricante: string;

  @Field({ nullable: false })
  @Column({ name: 'quantidade_estoque' })
  quantidadeEstoque: number;

  @Field({ nullable: false })
  @Column()
  valor: number;

  @Field({ nullable: false })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field({ nullable: false })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor() {
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Product };