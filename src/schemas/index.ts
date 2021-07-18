import { buildSchema } from 'type-graphql';
import { ProductsController } from '../controllers/ProductsController';
import { UsersController } from '../controllers/UsersController';
import { SessionController } from '../controllers/SessionController';

import { authenticationAssurance } from '../middlewares/authenticationAssurance';


const schemaFn = async () => await buildSchema({
  resolvers: [ProductsController, UsersController, SessionController],
  authChecker: authenticationAssurance
});

export { schemaFn };