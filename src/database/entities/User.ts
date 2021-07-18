import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { v4 as uuid } from 'uuid';

@ObjectType()
@Entity("users")
class User {

  @Field({ nullable: false })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field({ nullable: false })
  @Column()
  nome: string;

  @Field({ nullable: false })
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column()
  senha: string;

  @Field({ nullable: true })
  @Column()
  admin: boolean;

  @Field({ nullable: false })
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Field({ nullable: false })
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}

export { User };

