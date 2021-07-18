import { ArgsType, Field, Int } from 'type-graphql';


@ArgsType()
 export class AlterarProdutoTypes {
  @Field({ nullable: false })
  id: string

  @Field({ nullable: true })
  nome: string;

  @Field({ nullable: true })
  fabricante: string;

  @Field({ nullable: true })
  quantidadeEstoque: number;

  @Field(() => Int, { nullable: true })
  valor: number;
}