import 'reflect-metadata';
import { config } from 'dotenv';
config();
import { ApolloServer } from 'apollo-server';

import './database';

import { schemaFn } from './schemas';


const app = async () => {
  const schema = await schemaFn();

  const server = new ApolloServer({ schema });

  server.listen({ port: 4000 }, () => console.log('GraphQL server is running on port 4000'));
}

app();