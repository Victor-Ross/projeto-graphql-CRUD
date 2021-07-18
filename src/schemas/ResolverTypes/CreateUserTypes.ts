import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class CreateUserTypes {

  @Field({ nullable: false })
  nome: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  senha: string;

  @Field({ nullable: true })
  admin: boolean;

}