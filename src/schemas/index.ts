import { buildSchema } from 'type-graphql';
import { ProductsController } from '../controllers/ProductsController';


const schemaFn = async () => await buildSchema({
  resolvers: [ProductsController]
});

export { schemaFn };